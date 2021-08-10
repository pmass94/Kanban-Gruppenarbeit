let tasks = [];

function createTask(){
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let category = document.getElementById('categories');
    let urgency = document.getElementById('urgency-type');
    let description = document.getElementById('description');
    //let user = document.getElementById('  ?');

    let task = {
        "id": tasks.length,
        'category': 'ToDo',
        "title": title.value,
        "date": date.value,
        "taskcategory": category.selectedIndex,
        "urgency": urgency.selectedIndex, 
        "description": description.value,
        'user': ['Manuel']

    };
    tasks.push(task);
    console.log(tasks);
    backend.setItem('tasks', JSON.stringify(tasks));
    title.value = ' ';
    date.value = null;
    description.value = ' ';
}

function cancel(){
    document.getElementById('title').value = ' ';
    document.getElementById('date').value = null;
    document.getElementById('description').value = ' ';
}

function addUser(){

}