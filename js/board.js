boardfields = ['ToDo', 'inProgress', 'Testing', 'Done'];

let Todo;
let inProgress;
let Testing;
let Done;
let currentDraggedElement;

let task;
let idtask;

function updateHTML() {

    for (let i = 0; i < boardfields.length; i++) {
        let search = boardfields[i];
        let id = 'board' + search;

        document.getElementById(id).innerHTML = '';
        search = tasks.filter(t => t['category'] == search);

        for (let j = 0; j < search.length; j++) {

            let idtask = search[j]['id'];

            document.getElementById(id).innerHTML += `
            <div onclick="openChange(${idtask})" ondragstart="startDragging(${idtask})" draggable="true" class="board-task">${search[j]['title']}</div>
            `;
        }
    } 
}
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

function pushToBackend(){
    backend.setItem('tasks', JSON.stringify(tasks));
}

function deleteTask(){
    tasks[idtask] = '';
    changeTask();
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
