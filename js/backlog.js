/**
 * This function is update and Check the HTML Side
 * 
 * @param {array} - onload function / load tasks to the backlog containers
 */

function updateBacklogHTML() {
    document.getElementById('backlogHTML').innerHTML = ' ';
    for (let i = 0; i < tasks.length; i++) {
        document.getElementById('backlogHTML').innerHTML += showBacklog(i);

        document.getElementById(`blUserImg${i}`).src = tasks[i]['user']['logo'];
        document.getElementById(`userName${i}`).innerHTML = tasks[i]['user']['vorname'] + ' ' + tasks[i]['user']['name'];
        document.getElementById(`bl-email${i}`).innerHTML = tasks[i]['user']['email'];
        document.getElementById(`bl-taskcategory${i}`).innerHTML = tasks[i]['taskcategory'];
        document.getElementById(`bl-title${i}`).innerHTML = tasks[i]['title'];

        loadUrgencyColor(tasks[i]['urgency'], i);
        checkTask(tasks[i]['taskcategory'], i);
    }
}


/**
 * This function is used to give the HTML Code Return
 * 
 * @param {number} i - This is the Number from the Field
 */
function showBacklog(i) {
    return `<div class="backlogRows" id="row${i}">
    <div class="backlogUser">
        <img class="blUserImg" id="blUserImg${i}" src="">
        <div class="blUserData">
            <span class="wrap-W" id="userName${i}">user name</span>
            <a class="wrap-W" href="mailto:user email" id="bl-email${i}">user email</a>
        </div>
    </div>
    <div class="blCategories">
        <span class="blCategory wrap-W" id="bl-taskcategory${i}">category value</span>
    </div>
    <div class="blDetails">
        <span class="wrap-W" id="bl-title${i}">title</span>
    </div>
</div>`;
}

/**
 * This function is used for the classification of the importance.
 * 
 * @param {number} index - This is the Number from the Task
 * @param {string} urgency - This is the task for the Input
 */

function loadUrgencyColor(urgency, index) {

    if (urgency == 0) {
        document.getElementById(`row${index}`).classList.add('bl-urgency-high');
    } else if (urgency == 1) {
        document.getElementById(`row${index}`).classList.add('bl-urgency-middle');
    } else if (urgency == 2) {
        document.getElementById(`row${index}`).classList.add('bl-urgency-low');
    }
}

/**
 * This function is used to load the stats from the Task Category.
 * 
 * @param {number} index - This is the Number from the Task
 * @param {string} taskcategory - This is the task for the input
 */

function checkTask(taskcategory, index) {
    if (taskcategory == 0) {
        document.getElementById(`bl-taskcategory${index}`).innerHTML = 'Management';
    } else if (taskcategory == 1) {
        document.getElementById(`bl-taskcategory${index}`).innerHTML = 'Human Resources';
    } else if (taskcategory == 2) {
        document.getElementById(`bl-taskcategory${index}`).innerHTML = 'Development';
    } else if (taskcategory == 3) {
        document.getElementById(`bl-taskcategory${index}`).innerHTML = 'Design';
    }
}

