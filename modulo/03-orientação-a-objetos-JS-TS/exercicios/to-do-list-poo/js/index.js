// Variaveis
const titleInput = document.querySelector('#title-input');
const descriptionInput = document.querySelector('#description-input');
const createTaskBtn = document.querySelector('.create-task');
const pendingTaskList = document.querySelector('#pending-list');
const doneTaskList = document.querySelector('#done-list');

// Funções

const createElementList = (element, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('div');
    const listContent = document.createElement('div');
    const titleSpan = document.createElement('span');
    const descriptionSpan = document.createElement('span');
    const details = document.createElement('div');
    const buttons = document.createElement('div');
    const editBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')

    checkbox.classList = 'checkbox';
    listContent.classList = 'list-content';
    titleSpan.classList = 'title';
    descriptionSpan.classList = 'description';
    details.classList = 'details';
    buttons.classList = 'buttons';
    editBtn.classList = 'edit-btn';
    deleteBtn.classList = 'delete-btn';

    titleSpan.textContent = element.getTitulo;
    descriptionSpan.textContent = element.getDescricao;
    editBtn.textContent = 'Editar';
    deleteBtn.textContent = 'Excluir';

    li.appendChild(checkbox);
    li.appendChild(listContent);
    listContent.appendChild(titleSpan);
    listContent.appendChild(descriptionSpan);
    listContent.appendChild(details);
    if (element.getdataHora) {
        const dateTime = document.createElement('span');
        dateTime.classList = 'dateTime';
        dateTime.textContent = element.getdataHora;
        details.appendChild(dateTime);
    }
    details.appendChild(buttons);
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    li.setAttribute('data-task-index', index);
    return li;
}

const deleteTask = (list) => {
    const deleteBtns = document.querySelectorAll('.delete-btn');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const li = btn.closest('li');
            const taskIndex = Number(li.dataset.taskIndex);

            const taskToDelete = list.getListaPendente[taskIndex];

            if (taskToDelete) {
                list.excluirTarefa(taskToDelete);
                li.remove();
            } else {
                console.error("Erro ao excluir a tarefa. Tarefa não encontrada.");
            }
        });
    });
}

const taskChecked = (list) => {
    const checkbox = document.querySelectorAll('.checkbox');

    checkbox.forEach(checkbtn => {
        checkbtn.addEventListener('click', function () {
            const li = checkbtn.closest('li');
            const taskIndex = Number(li.dataset.taskIndex);

            
            if (!checkbtn.classList.contains('checked')) {
                checkbtn.classList.add('checked');
                const taskToChecked = list.getListaPendente[taskIndex];
                list.adicionarTarefaConcluida(taskToChecked);
                console.log(list.getListaConcluida)
            } else {
                checkbtn.classList.add('checked');
                const taskToPending = list.getListaConcluida[taskIndex];
                list.adicionarTarefaPendente(taskToPending);
            }
            renderTasks(list);
        });
    });
}

const renderTasks = (list) => {
    const pendingListUl = document.querySelector('#pending-list');
    const doneListUl = document.querySelector('#done-list');

    pendingListUl.innerHTML = '';
    doneListUl.innerHTML = '';

    list.getListaPendente.forEach((task, index) => {
        console.log(index);
        const li = createElementList(task, index);
        pendingListUl.appendChild(li);
    });
    if (list.getListaConcluida) {
        list.getListaConcluida.forEach((task) => {
            const li = createElementList(task)
            doneListUl.appendChild(li);
        })
    }
    taskChecked(list)
    deleteTask(list);
}


const list = new Lista();
const createTask = () => {
    try {
        const task = new Tarefa( titleInput.value, descriptionInput.value);
        list.criarTarefa(task);
        renderTasks(list);
        titleInput.value = '';
        descriptionInput.value = '';
        console.log(list.getListaPendente)
    } catch (err) {
        console.log(err.message);
    }
}


// Eventos
createTaskBtn.addEventListener('click', createTask);
