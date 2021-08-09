function updateBacklog() {
    let backlogContent = document.getElementById('backlogContent');

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        for (let j = 0; j < task['assigned_users'].length; j++) {
            const user = task['assigned_users'][j];

            backlogContent.innerHTML += renderBacklogRows(task, user);
        }
    }
}


function renderBacklogRows(task, user) {

    return `<div class="backlogRows">
                    <div class="backlogUser">
                        <img class="blUserImg" src="${user['img']}">
                        <div class="blUserData">
                            <span class="wrap-W">${user['name']}</span>
                            <a class="wrap-W" href="mailto:${user['email']}">${user['email']}</a>
                        </div>
                    </div>
                        <div class="blCategories">
                            <span class="blCategory wrap-W">${task['category_value']}</span>
                        </div>
                        <div class="blDetails">
                            <span class="wrap-W">${task['description']}</span>
                        </div>
                </div>`;

}