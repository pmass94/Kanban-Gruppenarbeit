boardfields = ['ToDo', 'inProgress', 'Testing', 'Done'];

let Todo;
let inProgress;
let Testing;
let Done;
let currentDraggedElement;
let task;
let idtask;

function updateHTML() {
    changeID();
    
    for (let i = 0; i < boardfields.length; i++) {
        let search = boardfields[i];
        let id = 'board' + search;

        document.getElementById(id).innerHTML = '';
        search = tasks.filter(t => t['category'] == search);

        console.log(search)

        for (let j = 0; j < search.length; j++) {
            idtask = search[j]['id'];

            document.getElementById(id).innerHTML += renderBoardHtml(search, j);
            /*loadDateBorder(search, j);*/
            loadUrgencyColor(search, j);
            CheckDate(search, j)
            
        }
    }
}

function renderBoardHtml(search, j) {
    return `
    <div id="board-task${idtask}" onclick="openChange(${idtask})" ondragstart="startDragging(${idtask})" draggable="true" class="board-task">
        <div id="board-date${idtask}" class="board-task-date">${dateDE(search, j)}</div>
        <div class="board-date-border"><h3>${search[j]['title']}</h3></div>
        <div class="board-responsible"><h4>Responsible:</h4></div>
        <div id="board-responsible-user${idtask}"  class="board-responsible-user">
            <img src="${tasks[idtask]["user"]["logo"]}"><span> ${tasks[idtask]["user"]["vorname"]} ${tasks[idtask]["user"]["name"]}</span>

        </div>
    </div>
    `;
}

function loadUrgencyColor(search, j) {
    let urgency = search[j]['urgency'];
    let boardtask = document.getElementById(`board-task${idtask}`)

    if (urgency == 0) {
        boardtask.classList.add('board-urgency-high');
    } else if (urgency == 1) {
        boardtask.classList.add('board-urgency-middle');
    } else if (urgency == 2) {
        boardtask.classList.add('board-urgency-low');
    }
}


function dateDE(search, j) {
    let date = new Date(search[j]['date']);
    if (date > 0) {
        return date.toLocaleDateString("de-DE");
    } else {
        return '';
    }
}

function CheckDate(search, j) {
    let date = new Date(search[j]['date']);
    let dateToday = new Date()
    if (date <= dateToday) {
        document.getElementById(`board-date${idtask}`).style = 'color: red; font-weight: bold';
        console.log(date, dateToday)
    }
}

/*function loadDateBorder(search, j) {
    let date = new Date(search[j]['date']);
    if (date >= 0) {
        document.getElementById(`board-date${idtask}`).classList.add('board-date-border');
    }
}*/

function startDragging(id) {
    currentDraggedElement = id;
}

function MoveTo(category) {
    tasks[currentDraggedElement]['category'] = category;
    updateHTML();
    pushToBackend();
}



function allowDrop(ev) {
    ev.preventDefault();
}

function openChange(id) {
    taskid = id;
    showTaskChange();
    loadTask(id);
}

function loadTask(id) {
    task = tasks[id];
    idtask = id;
    document.getElementById('board-title').value = task['title'];
    document.getElementById('board-date').value = task['date'];
    document.getElementById('board-categories').selectedIndex = task['taskcategory'];
    document.getElementById('board-urgency').selectedIndex = task['urgency'];
    document.getElementById('board-description').value = task['description'];
}

function changeTask() {
    changeJson();
    updateHTML();
    closeChange();
    pushToBackend();
}

function pushToBackend() {
    backend.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask() {
    tasks.splice(idtask, 1);
    
    
    changeTask();
}

function changeID(){
    for (let i = 0; i < tasks.length; i++) {
        let id = tasks[i];

        id['id'] = i;
    }
}

function changeJson() {
    task['title'] = document.getElementById('board-title').value;
    task['date'] = document.getElementById('board-date').value;
    task['taskcategory'] = document.getElementById('board-categories').selectedIndex;
    task['urgency'] = document.getElementById('board-urgency').selectedIndex;
    task['description'] = document.getElementById('board-description').value;
}

function showTaskChange() {
    document.getElementById('board-taskchange-br').classList.remove('d-none')
    document.getElementById('board-taskchange').classList.remove('d-none')
}

function closeChange() {
    document.getElementById('board-taskchange-br').classList.add('d-none')
    document.getElementById('board-taskchange').classList.add('d-none')
}
