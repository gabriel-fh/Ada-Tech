// document.addEventListener('DOMContentLoaded', function () {
const cardContainer = document.querySelector('.card_container');
let users = [];
const removeUser = (id) => {
    const request = indexedDB.open('database', 1);

    request.onsuccess = function (e) {
        const db = e.target.result;

        const transaction = db.transaction(['users'], 'readwrite');
        const objectStore = transaction.objectStore('users');
        const requestDelete = objectStore.delete(id)

        requestDelete.onsuccess = function () {
            getUsers()
        }
        requestDelete.onerror = function (e) {
            console.log('Erro Excluir: ', e.target.error)
        }
    }

    request.onerror = function (e) {
        console.log('Erro: ', e.target.error)
    }
}

const editUser = (id) => {
    window.location.href = `./index.html?id=${id}`;
}

const showUsers = () => {

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
                                <button class='edit-btn' onClick="editUser(${user.id})">Editar</button>
                                <button class='delete-btn' onClick="removeUser(${user.id})">Deletar</button>
                            </section>
                        </section>`;
    });

    cardContainer.innerHTML = usersHTML;
}

const getUsers = () => {
    // const storedUsers = JSON.parse(localStorage.getItem("USERS") || []);

    const request = indexedDB.open('database', 1);

    request.onsuccess = function (e) {
        const db = e.target.result;

        const transaction = db.transaction(['users'], 'readonly');
        const objectStore = transaction.objectStore('users');
        const requestGetAll = objectStore.getAll();

        requestGetAll.onsuccess = function (e) {
            users = e.target.result;
            showUsers();
        }

        requestGetAll.onerror = function (e) {
            console.log('Erro Obter: ', e.target.error)
        }
    }
    request.onerror = function (e) {

    }
}

getUsers()

// })