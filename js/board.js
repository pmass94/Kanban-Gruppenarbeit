tasks = [{
    'id': 0,
    'title': 'Aufgabe 1',
    'category': 'ToDo'
}, {
    'id': 1,
    'title': 'Aufgabe 2',
    'category': 'ToDo'
}, {
    'id': 2,
    'title': 'Aufgabe 3',
    'category': 'inProgress'
}, {
    'id': 3,
    'title': 'Aufgabe 4',
    'category': 'inProgress'
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
function startDragging(id){
    currentDraggedElement = id;
}

function MoveTo(category) {
    console.log('es geht', category)
    tasks[currentDraggedElement]['category'] = category;
    updateHTML();
}

function allowDrop(ev) {
    ev.preventDefault();
}

