/**
 * This function is used to style the selected page in the navbar.
 * 
 * 
 */
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
    } else if (urlIs('datenschutz')) {
        datenschutzClasses().add(select);
        datenschutzClassesResp().add(selectResponse);
    } else if (urlIs('impressum')) {
        impressumClasses().add(select);
        impressumClassesResp().add(selectResponse);
    }
}

/**
 * This function is used to check and return URL of the page
 * 
 * @param {string} link - This is the search term
 */
function urlIs(link) {
    return window.location.href.search(link) >= 0;
}

/**
 * This function is used to address ID Board
 * 
 * 
 */
function boardClasses() {
    return document.getElementById('board').classList;
}

/**
 * This function is used to address ID Board Responsive
 * 
 * 
 */
function boardClassesResp() {
    return document.getElementById('board-responsive').classList;
}

/**
 * This function is used to address ID Backlog
 * 
 * 
 */
function backlogClasses() {
    return document.getElementById('backlog').classList;
}

/**
 * This function is used to address ID Backlog Responsive
 * 
 * 
 */
function backlogClassesResp() {
    return document.getElementById('backlog-responsive').classList;
}

/**
 * This function is used to address ID Add Task
 * 
 * 
 */
function addtaskClasses() {
    return document.getElementById('addtask').classList;
}

/**
 * This function is used to address ID Add Task Responsive 
 * 
 * 
 */
function addtaskClassesResp() {
    return document.getElementById('addtask-responsive').classList;
}

/**
 * This function is used to address ID Help
 * 
 * 
 */
function helpClasses() {
    return document.getElementById('help').classList;
}

/**
 * This function is used to address ID Help Responsive
 * 
 * 
 */
function helpClassesResp() {
    return document.getElementById('help-responsive').classList;
}

/**
 * This function is used to address ID Datenschutz
 * 
 * 
 */
function datenschutzClasses() {
    return document.getElementById('datenschutz').classList;
}

/**
 * This function is used to address ID Datenschutz Responsive
 * 
 * 
 */
function datenschutzClassesResp() {
    return document.getElementById('datenschutz-responsive').classList;
}

/**
 * This function is used to address ID Impressum
 * 
 * 
 */
function impressumClasses() {
    return document.getElementById('impressum').classList;
}

/**
 * This function is used to address ID Impressum Responsive
 * 
 * 
 */
function impressumClassesResp() {
    return document.getElementById('impressum-responsive').classList;
}

/**
 * This function is used to reset all ID's
 * 
 * @param {string} select - This is the CSS Class 'select-side'
 */
function resetLinks(select) {
    boardClasses().remove(select);
    backlogClasses().remove(select);
    addtaskClasses().remove(select);
    helpClasses().remove(select);
    datenschutzClasses().remove(select);
    impressumClasses().remove(select);

}

/**
 * This function is used to reset all ID's from the Responsive Navbar
 * 
 * @param {string} select - This is the CSS Class 'select-side-responsive'
 */
function resetLinksResp(selectResponse) {
    boardClassesResp().remove(selectResponse);
    backlogClassesResp().remove(selectResponse);
    addtaskClassesResp().remove(selectResponse);
    helpClassesResp().remove(selectResponse);
    datenschutzClassesResp().remove(selectResponse);
    impressumClassesResp().remove(selectResponse);
}

/**
 * This function is used show the Responsive Side Menu for Mobilephones..
 * 
 * 
 */
function showSidemenu() {
    document.getElementById('navbarFilter').classList.add('filter');
    document.getElementById('navbar-responsive').style = 'transform: translateX(0%);';
}

/**
 * This function is used to closed the Responsive Side Menu for Mobilephones..
 * 
 * 
 */
function closeSidemenu() {
    document.getElementById('navbarFilter').classList.remove('filter');
    document.getElementById('navbar-responsive').style = 'transform: translateX(100%);';
}