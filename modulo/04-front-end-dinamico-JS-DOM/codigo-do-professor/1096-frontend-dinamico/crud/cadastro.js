const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

let userId;

let users = [];

getUserIdFromUrl();

validateFields();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const hasError = validateFormOnSubmit();

  if (!hasError) {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const birthDate = document.getElementById("birthDate").value;
    const profession = document.getElementById("profession").value;
    const documentNumber = document.getElementById("documentNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const user = {
      name,
      surname,
      birthDate,
      profession,
      documentNumber,
      email,
      password,
      phone,
      address,
    };

    if (!userId) {
      createUser(user);
    } else {
      updateUser(user);
    }
  }
});

function validateFormOnSubmit() {
  let hasError = false;
  console.log(inputs);
  inputs.forEach((field) => {
    if (!field.value) {
      field.nextElementSibling.classList.add("d-block");
      field.nextElementSibling.classList.remove("d-none");
      hasError = true;
    } else {
      field.nextElementSibling.classList.add("d-none");
      field.nextElementSibling.classList.remove("d-block");
    }
  });

  return hasError;
}

function validateFields() {
  inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
      if (!input.value) {
        showErrorMessage(input);
      } else {
        hideErrorMessage(input);
      }

      switch (input.id) {
        case "name":
        case "surname":
        case "profession":
          if (input.value.length < 2) {
            input.nextElementSibling.innerText =
              "O campo precisa ter, ao menos, 2 caracteres.";
            showErrorMessage(input);
          }
          break;

        case "birthDate":
          compareDates(input);
          break;

        case "documentNumber":
          if (input.value.length != 11) {
            input.nextElementSibling.innerText =
              "O campo precisa ter 11 caracteres.";
            showErrorMessage(input);
          }
          break;

        case "password":
          if (input.value.length < 8) {
            input.nextElementSibling.innerText =
              "O campo precisa ter, ao menos, 8 caracteres.";
            showErrorMessage(input);
          }
          break;

        case "phone":
          if (input.value.length < 10 || input.value.length > 11) {
            input.nextElementSibling.innerText =
              "O campo precisa ter entre 10 e 11 caracteres.";
            showErrorMessage(input);
          }
          break;

        default:
          break;
      }
    });
  });
}

function showErrorMessage(field) {
  const sibling = field.nextElementSibling;
  sibling.classList.add("d-block");
  sibling.classList.remove("d-none");
}

function hideErrorMessage(field) {
  const sibling = field.nextElementSibling;
  sibling.classList.add("d-none");
  sibling.classList.remove("d-block");
}

function compareDates(input) {
  const birthDate = new Date(input.value + "T00:00:00").setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);
  if (birthDate >= today) {
    input.nextElementSibling.innerText =
      "A data de nascimento precisa ser menor que a data atual.";
    showErrorMessage(input);
  }
}

function getUsers() {
  users = JSON.parse(localStorage.getItem("USERS") || "[]");
}

function getUserById(id) {
  findById(id)
    .then((user) => {
      setFormData(user);
    })
    .catch((error) => {
      console.error("Erro ao buscar o usuário:", error);
    });
}

function getUserIdFromUrl() {
  const search = window.location.search;
  const id = search.split("=").at(-1);
  if (id) {
    userId = id;
    getUserById(id);
  }
}

function setFormData(user) {
  document.getElementById("name").value = user.name;
  document.getElementById("surname").value = user.surname;
  document.getElementById("birthDate").value = user.birthDate;
  document.getElementById("profession").value = user.profession;
  document.getElementById("documentNumber").value = user.documentNumber;
  document.getElementById("email").value = user.email;
  document.getElementById("password").value = user.password;
  document.getElementById("phone").value = user.phone;
  document.getElementById("address").value = user.address;
}

function createUser(user) {
  save(user)
    .then(() => {
      window.location.href = "./usuarios.html";
    })
    .catch((error) => {
      console.error("Erro ao adicionar usuário", error);
    });
}

function updateUser(user) {
  update(user, userId)
    .then(() => {
      window.location.href = "./usuarios.html";
    })
    .catch((error) => {
      console.error("Erro ao editar usuário", error);
    });
}
