function updateBacklogHTML() {

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i]) {

            document.getElementById('backlog-content').innerHTML += renderBacklogHtml();
            document.getElementById('blUserImg').src = tasks[i]['user']['logo'];
            document.getElementById('blName').innerHTML = tasks[i]['user']['vorname']+''+tasks[i]['user']['name'];
        }



    }
}

function renderBacklogHtml() {
    return `        <div id="backlogHTML">
    <div class="backlogRows">
        <div class="backlogUser">
            <img class="blUserImg" id="blUserImg" src="img/joinlogo.png">
            <div class="blUserData">
                <span class="wrap-W" id="blName">user name</span>
                <a class="wrap-W" href="mailto:user email" id="bl-email">user email</a>
            </div>
        </div>
        <div class="blCategories">
            <span class="blCategory wrap-W" id="bl-taskcategory">category value</span>
        </div>
        <div class="blDetails">
            <span class="wrap-W" id="bl-title">title</span>
        </div>
    </div>
</div>
            `;
}



