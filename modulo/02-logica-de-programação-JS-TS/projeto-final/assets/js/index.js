// Variáveis
const newTaskBtn = document.querySelector('.create-task-btn');
const newTaskModal = document.querySelector('.create-task-modal-container');
const taskTitle = document.querySelector('.task-title-input');
const taskDescription = document.querySelector('.task-description-input');
const createTaskBtn = document.querySelector('.create-task-finish-btn');
const newTaskCancelBtn = document.querySelector('.create-task-cancel-btn');
const searchTaskInput = document.querySelector('.search-task-input')
const taskList = document.querySelector('.task-list');
const taskArr = [];
let id = 0;


// Funções
// função para renderizar as tarefas na lista (READ - CRUD)
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

// função para adicionar uma tarefa ao array e renderizar a lista
const addTask = function () {
    renderTasks(taskArr);
    closeModal();
};

// Função para formatar a data de criação da tarefa
const formatDateTime = function (date) {
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };

    const formattedDate = new Date(date).toLocaleString('pt-BR', options);

    const [dayOfWeek, currentDate, currentTime] = formattedDate.split(',');

    let formatedDayOfWeek;
    if (dayOfWeek.endsWith('.')) {
        formatedDayOfWeek = dayOfWeek.slice(0, -1);
    }
    
    return `${formatedDayOfWeek.charAt(0).toUpperCase() + formatedDayOfWeek.slice(1)}, ${currentDate} às ${currentTime}`;
};

// função para criar uma nova tarefa no "banco de Dados" (Create - CRUD)
const createTask = function () {
    if (taskTitle.value.trim() !== '') {
        id++;

        const task = {
            id: id,
            title: taskTitle.value,
            description: taskDescription.value,
            date: formatDateTime(new Date()),
            completed: false,
        };

        taskArr.push(task);

        console.log(task.description)

        addTask();
    }
};

// função para criar um elemento de tarefa (Create - CRUD)
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
                            <span class="date-time">Criado em: <br/>${task.date}</span>
                            <div class='footer-task-btn-content'>
                                <button class="edit-details footer-task-btn">Editar</button>
                                <button class="close-details footer-task-btn">fechar</button>
                            </div>
                        </div>
                    </div>`;

    return li;
};

// função para abrir o modal de criação de tarefas
const openModal = function () {
    newTaskModal.classList.remove('hidden');
};

// função para fechar o modal de criação de tarefas
const closeModal = function () {
    taskTitle.value = '';
    taskDescription.value = '';
    newTaskModal.classList.add('hidden');
};

// função para deletar uma tarefa do array e da lista (Delete - CRUD)
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

// Função para criar elementos HTML durante o UPDATE
const createElement = (type, className, placeholder, style, value, textContent) => {
    const element = document.createElement(type);
    element.classList = className;
    element.placeholder = placeholder;
    element.style = style;
    element.value = value;
    element.textContent = textContent;
    return element;
};

// Funções para criar inputs, botões e textareas durante o UPDATE
const createInputTitle = taskToEdit => createElement('input', 'task-title-input', 'Título', 'border: .1rem solid #626262', taskToEdit.title);

const createInputDescription = taskToEdit => createElement('textarea', 'task-description-input', 'Descrição', 'border: .1rem solid #626262; width: 100%', taskToEdit.description);

const createButton = (className, textContent) => createElement('button', className, '', '', '', textContent);

const createBtnCancelEdit = () => createButton('footer-task-btn', 'Cancelar');

const createBtnConfirm = () => createButton('footer-task-btn', 'Confirmar');

// função para editar uma tarefa (Update - CRUD)
const editTask = function (task) {
    const editBtn = task.querySelector('.edit-details');
    editBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const titleSpan = task.querySelector('.task-title');
        const descriptionSpan = task.querySelector('.task-desc');
        const btnEdit = task.querySelector('.edit-details');
        const btnClose = task.querySelector('.close-details');
        const taskId = Number(task.dataset.id);
        const taskToEdit = taskArr.find(t => t.id === taskId);

        const inputTitle = createInputTitle(taskToEdit);
        const inputDescription = createInputDescription(taskToEdit);
        const btnCancel = createBtnCancelEdit();
        const btnConfirm = createBtnConfirm();

        task.classList.add('isEditing');

        btnCancel.addEventListener('click', function (e) {
            e.stopPropagation();
            inputTitle.parentNode.replaceChild(titleSpan, inputTitle);
            inputDescription.parentNode.replaceChild(descriptionSpan, inputDescription);
            btnConfirm.parentNode.replaceChild(btnClose, btnConfirm);
            btnCancel.parentNode.replaceChild(btnEdit, btnCancel);
            task.classList.remove('isEditing');
        });

        btnConfirm.addEventListener('click', function (e) {
            e.stopPropagation();
            taskToEdit.title = inputTitle.value;
            taskToEdit.description = inputDescription.value;
            titleSpan.textContent = taskToEdit.title;
            descriptionSpan.textContent = taskToEdit.description;
            inputTitle.parentNode.replaceChild(titleSpan, inputTitle);
            inputDescription.parentNode.replaceChild(descriptionSpan, inputDescription);
            btnConfirm.parentNode.replaceChild(btnClose, btnConfirm);
            btnCancel.parentNode.replaceChild(btnEdit, btnCancel);
            task.classList.remove('isEditing');
        });

        titleSpan.parentNode.replaceChild(inputTitle, titleSpan);
        descriptionSpan.parentNode.replaceChild(inputDescription, descriptionSpan);

        btnClose.parentNode.replaceChild(btnConfirm, btnClose);
        btnEdit.parentNode.replaceChild(btnCancel, btnEdit);
    });
};

// Função para mostrar os detalhes de uma tarefa (READ - CRUD)
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

// Função para fechar detalhes da tarefa
const closeTaskDetails = function (task) {
    const closeBtn = task.querySelector('.close-details');
    closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const taskDetails = closeBtn.parentElement.parentElement.parentElement;
        task.classList.remove('selected');
        taskDetails.classList.add('hidden');
    });
};

// Função para marcar uma tarfa como concluida
const taskChecked = function (task) {
    const checkboxBtn = task.querySelector('.checkbox-btn');
    const taskTitle = task.querySelector('.task-title')
    const taskDescription = task.querySelector('.task-description')
    const btnEdit = task.querySelector('.edit-details')
    const taskId = Number(task.dataset.id);
    const currentTask = taskArr.find(t => t.id === taskId);
    checkboxBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        if (!task.classList.contains('isEditing')) {
            checkboxBtn.classList.toggle('checked')
            taskTitle.classList.toggle('line-through')
            taskDescription.classList.toggle('line-through')
            if (checkboxBtn.classList.contains('checked')) {
                currentTask.completed = true;
                btnEdit.disabled = true;
                btnEdit.style = 'cursor: not-allowed';
            } else {
                currentTask.completed = false;
                btnEdit.disabled = false
                btnEdit.style = 'cursor: pointer'
            }
        }

        console.log(currentTask)
    })
}

// Função para pesquisar uma tarefa por id
const searchTaskById = function () {
    const searchedTaskId = parseInt(searchTaskInput.value);

    if (!isNaN(searchedTaskId)) {
        const foundTask = taskArr.find(task => task.id === searchedTaskId);

        if (foundTask) {
            renderTasks([foundTask]);
        } else {
            renderNotFoundMessage();
        }
    } else {
        renderTasks(taskArr);
    }
};

// Função para mostrar uma mensagem quando a tarefa não for encontrada
const renderNotFoundMessage = function () {
    taskList.innerHTML = '<p class="not-found-message">Não foi possível encontrar a tarefa.</p>';
};

// Eventos
createTaskBtn.addEventListener('click', createTask);
newTaskBtn.addEventListener('click', openModal);
newTaskCancelBtn.addEventListener('click', closeModal);
searchTaskInput.addEventListener('input', searchTaskById);