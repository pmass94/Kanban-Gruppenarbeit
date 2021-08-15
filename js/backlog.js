function updateHTML() {
    for (let i = 0; i < boardfields.length; i++) {
        let search = boardfields[i];
        let id = 'board' + search;

        document.getElementById(id).innerHTML = '';
        search = tasks.filter(t => t['category'] == search);

        for (let j = 0; j < search.length; j++) {
            idtask = search[j]['id'];

            document.getElementById(id).innerHTML += renderBacklogHtml(search, j);

            loadUrgencyColor(search, j);

        }
    }
}

function renderBacklogHtml(search, j) {
    return `<div class="backlogRows ${taskState}">
                <div class="backlogUser">
                   <img class="blUserImg" src="${user['img']}">
                <div class="blUserData">
                    <span class="wrap-W">${user['name']}</span>
                    <a class="wrap-W" href="mailto:${user['email']}">${user['email']}</a>
                </div>
            </div>
                <div class="blCategories">
                    <span class="blCategory wrap-W">${task['taskcategory']}</span>
                </div>
                <div class="blDetails">
                    <span class="wrap-W">${task['title']}</span>
                </div>
            </div>
            `;
}

function loadUrgencyColor(search, j) {
    let urgency = search[j]['urgency'];
    let boardtask = document.getElementById(`bl-task${idtask}`)

    if (urgency == 0) {
        boardtask.classList.add('bl-urgency-high');
    } else if (urgency == 1) {
        boardtask.classList.add('bl-urgency-middle');
    } else if (urgency == 2) {
        boardtask.classList.add('bl-urgency-low');
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
