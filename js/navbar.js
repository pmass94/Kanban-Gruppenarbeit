let select;

function loadStyleNavbar() {

    if(window.innerWidth >= 1000){
        select = 'select-side';
    }else{
        select = 'select-side-responsive';
    }
    
    resetLinks(select);
    if (urlIs('board')) {
        boardClasses().add(select);
    } else if (urlIs('backlog')) {
        backlogClasses().add(select);
    } else if (urlIs('addtask')) {
        addtaskClasses().add(select);
    } else if (urlIs('help')) {
        helpClasses().add(select);
    } else if (urlIs('impressum')) {
        impressumClasses().add(select);
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

function impressumClasses() {
    return document.getElementById('impressum').classList;
}

function resetLinks(select) {
    boardClasses().remove(select);
    backlogClasses().remove(select);
    addtaskClasses().remove(select);
    helpClasses().remove(select);
    impressumClasses().remove(select);

}

function showSidemenu() {
    document.getElementById('navbarFilter').classList.add('filter');
    document.getElementById('navbar-responsive').style = 'transform: translateX(0%);';
  
  
  }
  
  function closeSidemenu() {
    document.getElementById('navbarFilter').classList.remove('filter');
    document.getElementById('navbar-responsive').style = 'transform: translateX(100%);';
  
  
  
  }