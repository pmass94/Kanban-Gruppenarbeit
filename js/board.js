tasks = [{
    'id': 0,
    'title': 'Aufgabe 1',
    'date': '',
    'category': 'ToDo',
    'taskcategory': 'Management',
    'urgency': 'Normal',
    'description': 'Text Aufgabe 1',
    'user': ['Manuel']
}, {
    'id': 1,
    'title': 'Aufgabe 2',
    'date': '',
    'category': 'inProgress',
    'taskcategory': 'Management',
    'urgency': 'Normal',
    'description': 'Text Aufgabe 2',
    'user': ['Stefan']
}, {
    'id': 2,
    'title': 'Aufgabe 3',
    'date': '',
    'category': 'ToDo',
    'taskcategory': 'Management',
    'urgency': 'Normal',
    'description': 'Text Aufgabe 3',
    'user': ['Peter']
}, {
    'id': 3,
    'title': 'Aufgabe 4',
    'date': '',
    'category': 'Done',
    'taskcategory': 'Management',
    'urgency': 'Normal',
    'description': 'Text Aufgabe 4',
    'user': ['Manuel', 'Stefan', 'Peter']
}];

boardfields = ['ToDo', 'inProgress', 'Testing', 'Done'];

let Todo;
let inProgress;
let Testing;
let Done;
let currentDraggedElement;


function updateHTML() {

    for (let i = 0; i < boardfields.length; i++) {
        let search = boardfields[i];
        let id = 'board' + search;

        document.getElementById(id).innerHTML = '';
        search = tasks.filter(t => t['category'] == search);

        for (let j = 0; j < search.length; j++) {

            document.getElementById(id).innerHTML += `
            <div ondragstart="startDragging(${search[j]['id']})" draggable="true" class="board-task">${search[j]['title']}</div>
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

