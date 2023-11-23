// Variáveis
const newTaskBtn = document.querySelector('.create-task-btn');
const newTaskModal = document.querySelector('.create-task-modal-container');
const taskTitle = document.querySelector('.task-title-input');
const taskDescription = document.querySelector('.task-description-input');
const createTaskBtn = document.querySelector('.create-task-finish-btn');
const newTaskCancelBtn = document.querySelector('.create-task-cancel-btn');
const taskList = document.querySelector('.task-list');
const taskArr = [];
let id = 0;


// CRUD

// CREATE
// Função para renderizar as tarefas na lista
const renderTasks = function (tasks) {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = createTaskElement(task);
        taskList.appendChild(li);
        showTaskDetails(li);
        closeTaskDetails(li);
        deleteTask(li);
        taskChecked(li);
        editTask(li);
    });
};

// Função addTask agora usa renderTasks
const addTask = function () {
    renderTasks(taskArr);
    closeModal();
};

const createTask = function () {
    if (taskTitle.value.trim() !== '') {
        id = id + 1;

        const task = {
            id: id,
            title: taskTitle.value,
            description: taskDescription.value,
            date: new Date().toLocaleString(),
        };

        taskArr.push(task);

        console.log(task.description)

        addTask();
    }
};

const createTaskElement = function (task) {
    const li = document.createElement('li');
    li.className = 'task';
    li.setAttribute('data-id', task.id);

    li.innerHTML = `<div class="task-content">
                        <div class="checkbox-btn"></div>
                        <div class="content">
                            <span class="task-title">${task.title}</span>
                        </div>
                        <button class="delete-task-btn">
                            <iconify-icon icon="tabler:trash-filled"></iconify-icon>
                        </button>
                    </div>
                    <div class="task-details hidden">
                        <div class="task-description">
                            <span class="task-desc">${task.description}</span>
                        </div>
                        <div class="task-footer">
                            <span class="date-time">Criado em: ${task.date}</span>
                            <div class='footer-task-btn-content'>
                                <button class="edit-details footer-task-btn">Editar</button>
                                <button class="close-details footer-task-btn">fechar</button>
                            </div>
                        </div>
                    </div>`;

    return li;
};

createTaskBtn.addEventListener('click', createTask);

const openModal = function () {
    newTaskModal.classList.remove('hidden');
};

newTaskBtn.addEventListener('click', openModal);

// Fechar modal de nova tarefa
const closeModal = function () {
    taskTitle.value = '';
    taskDescription.value = '';
    newTaskModal.classList.add('hidden');
};

newTaskCancelBtn.addEventListener('click', closeModal);

// DELETE
const deleteTask = function (task) {
    const deleteTaskBtn = task.querySelector('.delete-task-btn');
    deleteTaskBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const taskId = Number(task.dataset.id);
        const taskIndex = taskArr.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            taskArr.splice(taskIndex, 1)
            task.remove()
        }
    })
}

// UPDATE

const createInputTitle = function (taskToEdit) {
    const inputTitle = document.createElement('input');
    inputTitle.classList = 'task-title-input';
    inputTitle.placeholder = 'Título';
    inputTitle.style = 'border: .1rem solid #626262';
    inputTitle.value = taskToEdit.title;
    return inputTitle;
}

const createInputDescription = function (taskToEdit) {
    const inputDescription = document.createElement('textarea')
    inputDescription.classList = 'task-description-input';
    inputDescription.placeholder = 'Descrição';
    inputDescription.style = 'border: .1rem solid #626262; width: 100%';
    inputDescription.value = taskToEdit.description;
    return inputDescription
}

const createBtnCancelEdit = function () {
    const btnCancel = document.createElement('button');
    btnCancel.classList = 'footer-task-btn';
    btnCancel.textContent = 'Cancelar';
    return btnCancel;
}

const createBtnConfirm = function () {
    const btnConfirm = document.createElement('button');
    btnConfirm.classList = 'footer-task-btn';
    btnConfirm.textContent = 'Confirmar';
    return btnConfirm;
}

const editTask = function (task) {
    const editBtn = task.querySelector('.edit-details');
    editBtn.addEventListener('click', function (e) {
        e.stopPropagation()
        const titleSpan = task.querySelector('.task-title');
        const descriptionSpan = task.querySelector('.task-desc')
        const btnEdit = task.querySelector('.edit-details')
        const btnClose = task.querySelector('.close-details')
        const taskId = Number(task.dataset.id);
        const taskToEdit = taskArr.find(t => t.id === taskId);

        const inputTitle = createInputTitle(taskToEdit);
        const inputDescription = createInputDescription(taskToEdit);
        const btnCancel = createBtnCancelEdit();
        const btnConfirm = createBtnConfirm();

        task.classList.add('isEditing')

        btnCancel.addEventListener('click', function (e) {
            e.stopPropagation();
            inputTitle.parentNode.replaceChild(titleSpan, inputTitle);
            inputDescription.parentNode.replaceChild(descriptionSpan, inputDescription);
            btnConfirm.parentNode.replaceChild(btnClose, btnConfirm)
            btnCancel.parentNode.replaceChild(btnEdit, btnCancel)
            task.classList.remove('isEditing');
        })

        btnConfirm.addEventListener('click', function (e) {
            e.stopPropagation();
            taskToEdit.title = inputTitle.value;
            taskToEdit.description = inputDescription.value;
            titleSpan.textContent = taskToEdit.title
            descriptionSpan.textContent = taskToEdit.description
            inputTitle.parentNode.replaceChild(titleSpan, inputTitle);
            inputDescription.parentNode.replaceChild(descriptionSpan, inputDescription);
            btnConfirm.parentNode.replaceChild(btnClose, btnConfirm)
            btnCancel.parentNode.replaceChild(btnEdit, btnCancel)
            task.classList.remove('isEditing');
        })

        titleSpan.parentNode.replaceChild(inputTitle, titleSpan);
        descriptionSpan.parentNode.replaceChild(inputDescription, descriptionSpan);

        btnClose.parentNode.replaceChild(btnConfirm, btnClose)
        btnEdit.parentNode.replaceChild(btnCancel, btnEdit)
    })
}

// Mostrar as tarefas detalhadamente
const showTaskDetails = function (task) {

    task.addEventListener('click', function (e) {
        const htmlTasks = document.querySelectorAll('.selected');
        const isAlreadySelected = task.classList.contains('selected');

        htmlTasks.forEach(htmlTask => {
            if (!task.classList.contains('isEditing') || (e.target !== this && !task.classList.contains('isEditing'))) {
                htmlTask.classList.remove('selected');
                htmlTask.children[1].classList.add('hidden');
            }
        });
        if (!isAlreadySelected) {
            task.classList.add('selected');
            task.children[1].classList.remove('hidden');
        }
    });
};



// Fechar detalhes da tarefa
const closeTaskDetails = function (task) {
    const closeBtn = task.querySelector('.close-details');
    closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const taskDetails = closeBtn.parentElement.parentElement.parentElement;
        task.classList.remove('selected');
        taskDetails.classList.add('hidden');
    });
};

const taskChecked = function (task) {
    const checkboxBtn = task.querySelector('.checkbox-btn');
    const taskTitle = task.querySelector('.task-title')
    const taskDescription = task.querySelector('.task-description')
    const btnEdit = task.querySelector('.edit-details')
    checkboxBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!task.classList.contains('isEditing')) {
            checkboxBtn.classList.toggle('checked')
            taskTitle.classList.toggle('line-through')
            taskDescription.classList.toggle('line-through')
            if (checkboxBtn.classList.contains('checked')) {
                btnEdit.disabled = true
                btnEdit.style = 'cursor: not-allowed'
            } else {
                btnEdit.disabled = false
                btnEdit.style = 'cursor: pointer'
            }
        }
    })
}


// ...

// Função para pesquisar tarefa por ID
const searchTaskById = function () {
    if (taskArr.length > 0) {
        const searchedTaskId = parseInt(this.value)
        if (!isNaN(searchedTaskId)) {
            const filteredTasks = taskArr.filter(task => task.id === searchedTaskId)
    
            renderTasks(filteredTasks);
        }
    }
};

// Adicionar um ouvinte de evento ao botão de pesquisa
const searchTaskInput = document.querySelector('.search-task-input')
searchTaskInput.addEventListener('input', searchTaskById);

// ...
