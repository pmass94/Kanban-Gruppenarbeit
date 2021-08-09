tasks = [{
    'id': 0,
    'title': 'Aufgabe 1',
    'date': '',
    'category': 'ToDo',
    'taskcategory': 0,
    'urgency': 2,
    'description': 'Text Aufgabe 1',
    'user': ['Manuel']
}, {
    'id': 1,
    'title': 'Aufgabe 2',
    'date': '',
    'category': 'inProgress',
    'taskcategory': 1,
    'urgency': 1,
    'description': 'Text Aufgabe 2',
    'user': ['Stefan']
}, {
    'id': 2,
    'title': 'Aufgabe 3',
    'date': '',
    'category': 'ToDo',
    'taskcategory': 2,
    'urgency': 0,
    'description': 'Text Aufgabe 3',
    'user': ['Peter']
}, {
    'id': 3,
    'title': 'Aufgabe 4',
    'date': '',
    'category': 'Done',
    'taskcategory': 3,
    'urgency': 2,
    'description': 'Text Aufgabe 4',
    'user': ['Manuel', 'Stefan', 'Peter']
}];

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
}

function deleteTask(){
    delete tasks[idtask];
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
