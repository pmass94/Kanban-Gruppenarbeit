setURL('http://gruppe-93.developerakademie.com/smallest_backend_ever');

async function init() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    includeHTML();
    window.setTimeout(loadStyleNavbar, 50);
    if (urlIs('board')) { updateHTML() };

   
    

}

function addTasks() {
    tasks.push([{
        'id': 0,
        'title': 'Aufgabe 1',
        'date': '',
        'category': 'ToDo',
        'taskcategory': 0,
        'urgency': 2,
        'description': 'Text Aufgabe 1',
        'user': ['Manuel']
    }, {
        'id': 1,
        'title': 'Aufgabe 2',
        'date': '',
        'category': 'inProgress',
        'taskcategory': 1,
        'urgency': 1,
        'description': 'Text Aufgabe 2',
        'user': ['Stefan']
    }, {
        'id': 2,
        'title': 'Aufgabe 3',
        'date': '',
        'category': 'ToDo',
        'taskcategory': 2,
        'urgency': 0,
        'description': 'Text Aufgabe 3',
        'user': ['Peter']
    }, {
        'id': 3,
        'title': 'Aufgabe 4',
        'date': '',
        'category': 'Done',
        'taskcategory': 3,
        'urgency': 2,
        'description': 'Text Aufgabe 4',
        'user': ['Manuel', 'Stefan', 'Peter']
    }]);
    backend.setItem('tasks', JSON.stringify(tasks));

    
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}



