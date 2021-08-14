function loadStyleNavbar() {
    let select = 'select-side';
    let selectResponse = 'select-side-responsive';

    resetLinks(select);
    resetLinksResp(selectResponse);
    if (urlIs('board')) {
        boardClasses().add(select);
        boardClassesResp().add(selectResponse);
    } else if (urlIs('backlog')) {
        backlogClasses().add(select);
        backlogClassesResp().add(selectResponse);
    } else if (urlIs('addtask')) {
        addtaskClasses().add(select);
        addtaskClassesResp().add(selectResponse);
    } else if (urlIs('help')) {
        helpClasses().add(select);
        helpClassesResp().add(selectResponse);
    } else if (urlIs('impressum')) {
        impressumClasses().add(select);
        impressumClassesResp().add(selectResponse);
    }
}

function urlIs(link) {
    return window.location.href.search(link) >= 0;
}

function boardClasses() {
    return document.getElementById('board').classList;
}

function boardClassesResp() {
    return document.getElementById('board-responsive').classList;
}

function backlogClasses() {
    return document.getElementById('backlog').classList;
}

function backlogClassesResp() {
    return document.getElementById('backlog-responsive').classList;
}

function addtaskClasses() {
    return document.getElementById('addtask').classList;
}

function addtaskClassesResp() {
    return document.getElementById('addtask-responsive').classList;
}

function helpClasses() {
    return document.getElementById('help').classList;
}

function helpClassesResp() {
    return document.getElementById('help-responsive').classList;
}

function impressumClasses() {
    return document.getElementById('impressum').classList;
}

function impressumClassesResp() {
    return document.getElementById('impressum-responsive').classList;
}

function resetLinks(select) {
    boardClasses().remove(select);
    backlogClasses().remove(select);
    addtaskClasses().remove(select);
    helpClasses().remove(select);
    impressumClasses().remove(select);

}

function resetLinksResp(selectResponse){
    boardClassesResp().remove(selectResponse);
    backlogClassesResp().remove(selectResponse);
    addtaskClassesResp().remove(selectResponse);
    helpClassesResp().remove(selectResponse);
    impressumClassesResp().remove(selectResponse);
}

function showSidemenu() {
    document.getElementById('navbarFilter').classList.add('filter');
    document.getElementById('navbar-responsive').style = 'transform: translateX(0%);';
}

function closeSidemenu() {
    document.getElementById('navbarFilter').classList.remove('filter');
    document.getElementById('navbar-responsive').style = 'transform: translateX(100%);';
}