function loadSyleNavbar() {

    let select = "select-side";

    if (window.location.href.search("board") >= 0) {
        changeBoard(select);
    } else if (window.location.href.search("backlog") >= 0) {
        changeBacklog(select);
    } else if (window.location.href.search("addtask") >= 0) {
        changeAddtask(select);
    } else if (window.location.href.search("help") >= 0) {
        changeHelp(select);
    }
}

function changeBoard(select){
    document.getElementById('board').classList.add(select);
    document.getElementById('backlog').classList.remove(select);
    document.getElementById('addtask').classList.remove(select);
    document.getElementById('help').classList.remove(select);
}

function changeBacklog(select){
    document.getElementById('board').classList.remove(select);
    document.getElementById('backlog').classList.add(select);
    document.getElementById('addtask').classList.remove(select);
    document.getElementById('help').classList.remove(select);
}

function changeAddtask(select){
    document.getElementById('board').classList.remove(select);
    document.getElementById('backlog').classList.remove(select);
    document.getElementById('addtask').classList.add(select);
    document.getElementById('help').classList.remove(select);
}

function changeHelp(select){
    document.getElementById('board').classList.remove(select);
    document.getElementById('backlog').classList.remove(select);
    document.getElementById('addtask').classList.remove(select);
    document.getElementById('help').classList.add(select);
}