function loadSyleNavbar() {

    let select = 'select-side';
    resetLinks(select);
    if (urlIs('board')) {
        boardClasses().add(select);
    } else if (urlIs('backlog')) {
        backlogClasses().add(select);
    } else if (urlIs('addtask')) {
        addtaskClasses().add(select);
    } else if (urlIs('help')) {
        helpClasses().add(select);
    }
}

function urlIs(link) {
    return window.location.href.search(link) >= 0;
}

function boardClasses() {
    return document.getElementById('board').classList;
}

function backlogClasses() {
    return document.getElementById('backlog').classList;
}

function addtaskClasses() {
    return document.getElementById('addtask').classList;
}

function helpClasses() {
    return document.getElementById('help').classList;
}

function resetLinks(select) {
    boardClasses().remove(select);
    backlogClasses().remove(select);
    addtaskClasses().remove(select);
    helpClasses().remove(select);

}