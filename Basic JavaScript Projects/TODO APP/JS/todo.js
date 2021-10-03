/*function gets the task from input*/
function get_todos() {
    /*this creates an array of inputed task*/ 
    var todos = new Array;
    /*pulls task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*if the input is not null then JSON.parse will communicate with the web browser to make the task JavaScript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*this function adds inputed task to get_Todos function array*/
function add() {
    /*this takes inputed task and creates variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*adds a new task the end of the array*/
    todos.push(task);
    /*converts the task input to a JSON string*/
    localStorage.setItem('todo',JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/*function keeps the task permanetly displayed on the screen*/
function show() {
    /*this sets retrieved task as a variable*/
    var todos = get_todos();

    /*makes an unordered list*/
    var html = '<ul>';
    /*displays a task to the list in imputed order*/
    for (var i = 0; i < todos.length; i++) {
        /* displays task as a list and creates button with 'x'*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>'; 
    };
    html += '</ul>';
    /*displays task as a list*/
    document.getElementById('todos').innerHTML = html;

}
/*displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*keeps inputs displayed permantaly on the screen*/
show();