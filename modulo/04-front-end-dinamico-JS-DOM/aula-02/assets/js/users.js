const cardContainer = document.querySelector('.card_container');

const getUsers = () => {
    // const storedUsers = JSON.parse(localStorage.getItem("USERS") || []);

    const request = indexedDB.open('database', 1);

    request.onsuccess = function (e) {
        const db = e.target.result;

        const transaction = db.transaction(['users'], 'readonly');
        const objectStore = transaction.objectStore('users');
        const requestGetAll = objectStore.getAll();

        requestGetAll.onsuccess = function (e) {
            const users = e.target.result;
            showUsers(users);
        }

        requestGetAll.onerror = function (e) {
            console.log('Erro: ', e.target.error)
        }
    }
    request.onerror = function (e) {

    }
}

getUsers() 
const showUsers = (users) => {

    let usersHTML = "";

    users.forEach(user => {
        usersHTML += `<section class='card'>
                            <section class="card_line">
                                <span>Nome: <span>${user.name}</span></span>
                                <span>Sobrenome: <span>${user.surname}</span></span>
                            </section>
                            <section class="card_line">
                                <span>Data de Nascimento: <span>${user.birthDate}</span></span>
                                <span>Profissão: <span>${user.profession}</span></span>
                                <span>CPF: <span>${user.documentNumber}</span></span>
                            </section>
                            <section class="card_line">
                                <span>E-mail: <span>${user.email}</span></span>
                                <span>Senha: <span>${user.password}</span></span>
                            </section>
                            <section class="card_line">
                                <span>Telefone: <span>${user.phone}</span></span>
                                <span>Endereço: <span>${user.address}</span></span>
                            </section>
                            <section class="btn-container">
                                <button>Editar</button>
                                <button>Deletar</button>
                            </section>
                        </section>`;
    });

    cardContainer.innerHTML = usersHTML;
}

