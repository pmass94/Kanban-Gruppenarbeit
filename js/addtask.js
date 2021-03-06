let tasks = [];

let task = {
    "id": " ",
    'category': 'ToDo',
    "title": " ",
    "date": " ",
    "taskcategory": " ",
    "urgency": " ",
    "description": " ",
    "user": 'user[0]'

};


/**
 * This function creates the new Task and after uploading it on the server in the JSON
 * and opens the Board page
 */
async function createTask() {
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let category = document.getElementById('categories');
    let urgency = document.getElementById('urgency-type');
    let description = document.getElementById('description');

    task['id'] = tasks.length;
    task['category'] = 'ToDo';
    task['date'] = date.value;
    task['title'] = title.value;
    task['taskcategory'] = category.selectedIndex;
    task['urgency'] = urgency.selectedIndex;
    task['description'] = description.value;
   
    tasks.push(task);
    console.log(tasks);
    await backend.setItem('tasks', JSON.stringify(tasks));
    title.value = ' ';
    date.value = null;
    description.value = ' ';
    openBoard();
}

async function openBoard() {

    window.location.href = './board.html';

}
/**
 * this function cancels the new task
 */
function cancel() {
    document.getElementById('title').value = ' ';
    document.getElementById('date').value = null;
    document.getElementById('description').value = ' ';
}
/**
 * this function opens the add user window after clicking the +
 * by "assigned to"
 */
function addUser() {
    document.getElementById('user1').innerHTML = `
    <span><img src=${users[0]['logo']} class="addUserImg" ></span> 
    <span>${users[0]['vorname']}  ${users[0]['name']} </span>`;
    document.getElementById('user2').innerHTML = `
    <span><img src=${users[1]['logo']} class="addUserImg" ></span> 
    <span>${users[1]['vorname']}  ${users[1]['name']} </span>`;
    document.getElementById('user3').innerHTML = `
    <span><img src=${users[2]['logo']} class="addUserImg" ></span> 
    <span>${users[2]['vorname']}  ${users[2]['name']}</span> `;
    document.getElementById('assignUser').classList.remove('d-none');
}
/**
 * this function closes the add user window
 */
function closeAssignment() {
    document.getElementById('assignUser').classList.add('d-none');
}
/**
 * this function selects the user from add user window
 * and add it by "assigned to"
 * @param {number} index - the index of the user that will have the task assigned to
 */
function selectUser(index) {
    let user = users[index];
    task['user'] = user;
    document.getElementById('userdata').innerHTML = `
    <img id="userimg" src="" alt="">
    <div id="username"></div>
    `;

    document.getElementById('userimg').src = users[index]['logo'];
    document.getElementById('username').innerHTML = users[index]['vorname'] + ' ' + users[index]['name'];
    closeAssignment();

}