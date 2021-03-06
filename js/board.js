boardfields = ['ToDo', 'inProgress', 'Testing', 'Done'];

let inProgress;
let currentDraggedElement;
let task;
let idtask;
let iduser;
let isUser = false;

/**
 * This function is update and Check the HTML Side
 * 
 * 
 */
function updateHTML() {
    changeID();

    for (let i = 0; i < boardfields.length; i++) {
        let search = boardfields[i];
        let id = 'board' + search;

        document.getElementById(id).innerHTML = '';
        search = tasks.filter(t => t['category'] == search);

        for (let j = 0; j < search.length; j++) {
            idtask = search[j]['id'];

            document.getElementById(id).innerHTML += renderBoardHtml(search, j);
            loadUrgencyColor(search, j);
            CheckDate(search, j)

        }
    }
}

/**
 * This function is used to give the HTML Code Return
 * 
 * @param {string} search - This is the Task for the Input
 * @param {number} j - This is the Number from the Field
 */
function renderBoardHtml(search, j) {
    return `
    <div id="board-task${idtask}" onclick="openChange(${idtask})" ondragstart="startDragging(${idtask})" draggable="true" class="board-task">
        <div id="board-date${idtask}" class="board-task-date">${changeDatetoDE(search, j)}</div>
        <div class="board-date-border"><h3>${search[j]['title']}</h3></div>
        <div class="board-responsible"><h4>Responsible:</h4></div>
        <div id="board-responsible-user${idtask}"  class="board-responsible-user">
            <img src="${tasks[idtask]["user"]["logo"]}"><span> ${tasks[idtask]["user"]["vorname"]} ${tasks[idtask]["user"]["name"]}</span>

        </div>
    </div>
    `;
}

/**
 * This function is used and the classification to load for importance
 * 
 * @param {string} search - This is the Task for the Input
 * @param {number} j - This is the Number from the Field
 */
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

/**
 * This function is used to Change the Date Format in the German Format (dd.mm.yyyy)
 * 
 * @param {string} search - This is the Task for the Input
 * @param {number} j - This is the Number from the Field
 */
function changeDatetoDE(search, j) {
    let date = new Date(search[j]['date']);
    if (date > 0) {
        return date.toLocaleDateString("de-DE");
    } else {
        return '';
    }
}

/**
 * This function is used to Change the Date Format in the German Format (dd.mm.yyyy)
 * 
 * @param {string} search - This is the Task for the Input
 * @param {number} j - This is the Number from the Field
 */
function CheckDate(search, j) {
    let date = new Date(search[j]['date']);
    let dateToday = new Date()
    if (date <= dateToday) {
        document.getElementById(`board-date${idtask}`).style = 'color: red; font-weight: bold';
    }
}

/**
 * This function is to Drag a Element 
 * 
 * @param {number} id - This is the ID from The Task
 */
function startDragging(id) {
    currentDraggedElement = id;
}

/**
 * This function is to Move in a Field
 * 
 * @param {string} category - This is the selectet Field for Drop 
 */
function MoveTo(category) {
    tasks[currentDraggedElement]['category'] = category;
    updateHTML();
    pushToBackend();
}


/**
 * This function is to Drop function and for Change all Things
 * 
 * @param {string} ev 
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * This function is to Open the Changeside for the Task
 * 
 * @param {number} id - This is the Number from the Task
 */
function openChange(id) {
    taskid = id;
    showTaskChange();
    loadTask(id);
    addAsignedto(id);
    checkPositionAddUser()
}

/**
 * This function is used to load the person in charge.
 * 
 * @param {number} id - This is the Number from the Task
 */
function addAsignedto(id) {
    let logo = tasks[id]['user']['logo'];
    let firstname = tasks[id]['user']['vorname'];
    let name = tasks[id]['user']['name'];

    document.getElementById('responsibleUser').innerHTML = `
    <span><img src=${logo} class="addUserImg" ></span> 
    <span>${firstname} ${name} </span>`;
}

/**
 * This function is used to load the stats from the Task in the Change Task side.
 * 
 * @param {number} id - This is the Number from the Task
 */
function loadTask(id) {
    task = tasks[id];
    idtask = id;
    document.getElementById('board-title').value = task['title'];
    document.getElementById('board-date').value = task['date'];
    document.getElementById('board-categories').selectedIndex = task['taskcategory'];
    document.getElementById('board-urgency').selectedIndex = task['urgency'];
    document.getElementById('board-description').value = task['description'];
}

/**
 * This function is to Save the Change in den Task an Update all
 * 
 *=
 */
function changeTask() {
    changeJson();
    updateHTML();
    closeChange();
    pushToBackend();
    isUser = false;
}

/**
 * This function is used to push the new Change to the BackendServer
 * 
 * 
 */
function pushToBackend() {
    backend.setItem('tasks', JSON.stringify(tasks));
}

/**
 * This function is used to delete the select Task
 * 
 * @param {number} id - This is the Number from the Task
 */
function deleteTask() {
    isUser = false;
    tasks.splice(idtask, 1);
    changeTask();
}

/**
 * This function is used to Load all User from Change
 * 
 * 
 */
function loadUser() {

    document.getElementById('user2').innerHTML = `
    <span><img src=${users[1]['logo']} class="addUserImg" ></span> 
    <span>${users[1]['vorname']}  ${users[1]['name']} </span>`;
    document.getElementById('user3').innerHTML = `
    <span><img src=${users[2]['logo']} class="addUserImg" ></span> 
    <span>${users[2]['vorname']}  ${users[2]['name']}</span> `;
}

/**
 * This function is used to Update the ids after delete a Task
 * 
 * 
 */
function changeID() {
    for (let i = 0; i < tasks.length; i++) {
        let id = tasks[i];

        id['id'] = i;
    }
}

/**
 * This function is used to Update the Json tasks
 * 
 * 
 */
function changeJson() {
    task['title'] = document.getElementById('board-title').value;
    task['date'] = document.getElementById('board-date').value;
    task['taskcategory'] = document.getElementById('board-categories').selectedIndex;
    task['urgency'] = document.getElementById('board-urgency').selectedIndex;
    task['description'] = document.getElementById('board-description').value;
    if (isUser == true) {
        changeResponsibleUser();
    }
}

/**
 * This function is used to Open the Task Change Side
 * 
 * 
 */
function showTaskChange() {
    document.getElementById('board-taskchange-br').classList.remove('d-none');
    document.getElementById('board-taskchange').classList.remove('d-none');
}

/**
 * This function is used to Close the Task Change Side
 * 
 * 
 */
function closeChange() {
    document.getElementById('board-taskchange-br').classList.add('d-none');
    document.getElementById('board-taskchange').classList.add('d-none');
    closeChangeUser();
}

/**
 * This function is used to open the Responsible User view.
 * 
 * 
 */
function changeUser() {
    document.getElementById('board-ChangeUser').classList.remove('d-none');
    loadChangeUsers();
    checkPositionAddUser();


}

/**
 * This function is used to close the Responsible User view.
 * 
 * 
 */
function closeChangeUser() {
    document.getElementById('board-ChangeUser').classList.add('d-none');
}

/**
 * This function is used to open the responsible user view in the right place.
 * 
 * 
 */
function checkPositionAddUser() {
    let left = document.getElementById('addUser').offsetLeft;
    let top = document.getElementById('addUser').offsetTop;
    let height = document.getElementById('board-ChangeUser').offsetHeight;

    left = left - 280
    top = top - height;

    document.getElementById('board-ChangeUser').style.cssText = `top: ${top}px; left: ${left}px`;
}

/**
 * This function is used to close the Responsible User view and Load the Users from the Array
 * 
 * 
 */
function loadChangeUsers() {
    let userfield = document.getElementById('board-ChangeUsers')
    userfield.innerHTML = ''

    for (let i = 0; i < users.length; i++) {

        let logo = users[i]['logo'];
        let firstname = users[i]['vorname'];
        let name = users[i]['name'];

        userfield.innerHTML += `
         <div onclick="addUser(${i})" class="changeUser">
         <img src="${logo}" class="addUserImg">
         <span>${firstname} ${name} </span>
        </div>`;
    }
}

/**
 * This function is used to load the user to the Usermenu
 * 
 * 
 */
function addUser(i) {
    let logo = users[i]['logo'];
    let firstname = users[i]['vorname'];
    let name = users[i]['name'];
    iduser = i;

    document.getElementById('responsibleUser').innerHTML = `
    <span><img src=${logo} class="addUserImg" ></span> 
    <span>${firstname} ${name} </span>`;

    isUser = true;
    closeChangeUser();
}

/**
 * This function is changed to the selectet user.
 * 
 * 
 */
function changeResponsibleUser() {
    let logouser = users[iduser]['logo'];
    let firstnameuser = users[iduser]['vorname'];
    let nameuser = users[iduser]['name'];
    let namemail = users[iduser]['email'];

    tasks[idtask]['user']['logo'] = logouser;
    tasks[idtask]['user']['vorname'] = firstnameuser;
    tasks[idtask]['user']['name'] = nameuser;
    tasks[idtask]['user']['email'] = namemail;
}
