const form = document.querySelector('form');
const inputs = form.querySelectorAll('.user_data_container input');
// const users = [];

const createDataBase = () => {
    const request = indexedDB.open("database", 1);

    request.onsuccess = function (e) {
        const db = e.target.result;
        // console.log(db);
    }

    request.onerror = function (e) {
        console.log(e.target.error);
    }

    request.onupgradeneeded = function (e) {
        const db = e.target.result
        const objectStore = db.createObjectStore("users", {
            keyPath: 'id',
            autoIncrement: true,
        })
    }
}

createDataBase()
const registerUser = () => {
    const payload = {};
    inputs.forEach(input => {
        payload[input.name] = input.value;
        input.value = '';
    });

    // const storedUsersString = localStorage.getItem("USERS");
    // let storedUsers = JSON.parse(storedUsersString) || [];
    // storedUsers.push(payload);
    // localStorage.setItem("USERS", JSON.stringify(storedUsers));


    const request = indexedDB.open('database', 1);

    request.onsuccess = function (e) {
        const db = e.target.result;

        const transaction = db.transaction(['users'], 'readwrite');
        const objectStore = transaction.objectStore('users');
        const requestAdd =  objectStore.add(payload);
        
        requestAdd.onsuccess = function (e) {
            window.location.href = './users.html'
        }
        
        requestAdd.onerror = function (e) {
            console.log('Erro: ', e.target.error)
        }
    }
    request.onerror = function (e) {
        
    }

};

const validateField = (input) => {
    let isValid = false;

    const commonValidation = (minLength, errorMessage) => {
        if (input.value.length < minLength) {
            input.nextElementSibling.innerText = errorMessage;
            input.nextElementSibling.classList.remove('hidden');
        } else {
            input.nextElementSibling.classList.add('hidden');
            isValid = true;
        }
    };

    switch (input.name) {
        case 'name':
        case 'surname':
        case 'profession':
        case 'email':
        case 'address':
            commonValidation(3, `O campo ${input.previousElementSibling.textContent.toLowerCase()} deve ter no mínimo 3 caracteres`);
            break;

        case 'birthDate':
            const currentDate = new Date().getTime();
            const inputDate = new Date(input.value).getTime();
            if (inputDate >= currentDate) {
                input.nextElementSibling.innerText = `O campo data de nascimento não pode ser maior que a data atual`;
                input.nextElementSibling.classList.remove('hidden');
            } else {
                input.nextElementSibling.classList.add('hidden');
                isValid = true;
            }
            break;

        case 'documentNumber':
            commonValidation(11, 'O campo CPF deve ter 11 caracteres');
            break;

        case 'password':
            commonValidation(8, 'O campo senha deve ter no mínimo 8 caracteres');
            break;

        case 'phone':
            if (input.value.length < 10 || input.value.length > 11) {
                input.nextElementSibling.innerText = 'O campo telefone deve ter entre 10 e 11 caracteres';
                input.nextElementSibling.classList.remove('hidden');
            } else {
                input.nextElementSibling.classList.add('hidden');
                isValid = true;
            }
            break;

        default:
            isValid = true;
    }

    return isValid;
};

const validateForm = (e) => {
    e.preventDefault();
    let isValidForm = true;

    inputs.forEach(input => {
        if (!input.value || input.value.trim() === '') {
            input.nextElementSibling.classList.remove('hidden');
            isValidForm = false;
        } else {
            input.nextElementSibling.classList.add('hidden');
        }

        const isValidField = validateField(input);
        if (!isValidField) {
            isValidForm = false;
        }
    });

    if (isValidForm) {
        registerUser();
    }
};


form.addEventListener('submit', validateForm);

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateField(input);
    });
});
