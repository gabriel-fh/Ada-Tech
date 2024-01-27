const usersDiv = document.getElementById("users-list");
let users = [];

getUsers();

function refreshUsersGrid() {
  usersDiv.innerHTML = "";
  users.forEach((user) => {
    usersDiv.innerHTML += `
        <div class="col-4">
            <div class="card">
            <div class="card-header">
                ${user.name} ${user.surname}
            </div>
            <div class="card-body">
                <p class="card-text">
                <strong>Data Nasc.:</strong> ${user.birthDate}
                </p>
                <p class="card-text">
                <strong>Profissão:</strong> ${user.profession}
                </p>
                <p class="card-text">
                <strong>CPF:</strong> ${user.documentNumber}
                </p>
                <p class="card-text">
                <strong>E-mail:</strong> ${user.email}
                </p>
                <p class="card-text">
                <strong>Telefone:</strong> ${user.phone}
                </p>
                <p class="card-text">
                <strong>Endereço:</strong> ${user.address}
                </p>
            </div>
            <div class="card-footer d-flex justify-content-end">
                <a href="#" class="btn btn-primary" onclick="editUser('${user._id}')">Editar</a>
                <a class="btn btn-danger" onclick="removeUser('${user._id}')">Excluir</a>
            </div>
            </div>
        </div>
    `;
  });
}

function getUsers() {
  findAll()
    .then((records) => {
      users = records;
      refreshUsersGrid();
    })
    .catch((error) => {
      console.error("Erro ao buscar usuários:", error);
    });
}

function removeUser(id) {
  remove(id)
    .then(() => {
      getUsers();
    })
    .catch((error) => {
      console.error("Erro ao excluir o usuário:", error);
    });
}

function editUser(id) {
  window.location.href = `./cadastro.html?id=${id}`;
}
