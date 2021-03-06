setURL('http://gruppe-93.developerakademie.com/smallest_backend_ever');

let users = [{
    "name": "Bärlocher",
    "vorname": "Manuel",
    "email": "manuel@bluewin.ch",
    "logo": "./img/userimg/man.png"
},

{
    "name": "Mass",
    "vorname": "Peter",
    "email": "peter@joingruppe.com",
    "logo": "./img/userimg/bussiness-man.png"
},

{
    "name": "Moldoveanu",
    "vorname": "Stefan",
    "email": "stefan@joingruppe.com",
    "logo": "./img/userimg/manyoung.png"
}];



async function init() {
    await downloadFromServer();
    tasks = JSON.parse(backend.getItem('tasks')) || [];
    includeHTML();
    window.setTimeout(loadStyleNavbar, 50);
    if (urlIs('board')) { updateHTML() };
    if (urlIs('backlog')) { updateBacklogHTML() };
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



