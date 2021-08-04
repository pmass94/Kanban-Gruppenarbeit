function loadSyleNavbar() {

    let select = "select-side";

    if (window.location.href.search("board") >= 0) {

        document.getElementById('board').classList.add(select);
        document.getElementById('backlog').classList.remove(select);
        document.getElementById('addtask').classList.remove(select);
        document.getElementById('help').classList.remove(select);

    } else if (window.location.href.search("backlog") >= 0) {

        document.getElementById('board').classList.remove(select);
        document.getElementById('backlog').classList.add(select);
        document.getElementById('addtask').classList.remove(select);
        document.getElementById('help').classList.remove(select);

    } else if (window.location.href.search("addtastk") >= 0) {

        document.getElementById('board').classList.remove(select);
        document.getElementById('backlog').classList.remove(select);
        document.getElementById('addtask').classList.add(select);
        document.getElementById('help').classList.remove(select);

    } else if (window.location.href.search("help") >= 0) {

        document.getElementById('board').classList.remove(select);
        document.getElementById('backlog').classList.remove(select);
        document.getElementById('addtask').classList.remove(select);
        document.getElementById('help').classList.add(select);

    }
}