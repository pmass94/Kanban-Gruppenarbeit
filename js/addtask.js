let tasks = [];

function createTask(){
    let title = document.getElementById('title');
    let date = document.getElementById('date');
    let category = document.getElementById('categories');
    let urgency = document.getElementById('urgency-type');
    let description = document.getElementById('description');
    //let user = document.getElementById('  ?');

    let task = {
        "title": title.value,
        "date": date.value,
        "category": category.value,
        "urgency": urgency.value, 
        "description": description.value
    };
    tasks.push(task);
    console.log(tasks);
    backend.setItem("tasks", tasks);
    title.value = ' ';
    date.value = ' ';
    description.value = ' ';
}

function cancel(){
    document.getElementById('title').value = ' ';
    document.getElementById('date').value = ' ';
    document.getElementById('description').value = ' ';
}

function addUser(){

}