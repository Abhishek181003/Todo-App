function loadTodos(){
    // This function will be used to load the todos from the database
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList" : []};
    console.log(todos);
    return todos;
}

// This function will add the given todo to the local storage
function addToLocalStorage(todoText){
    const todos = loadTodos();
    todos.todoList.push(todoText);
    localStorage.setItem("todos" , JSON.stringify(todos));
}

function appendTodoInHtml(todoText){
    const todoList = document.getElementById("todoList");
    const todo = document.createElement("li");

    todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded" , ()=>{
    const todoInput = document.getElementById("todoInput");
    console.log(todoInput);
    
    const submitButton = document.getElementById("addTodo");

    submitButton.addEventListener("click" , (event)=>{
        const todoText = todoInput.value;
        console.log(todoText);
        if(todoText = ''){
            alert("Please write something for todo");
        }else{
            addToLocalStorage(todoText);
            appendTodoInHtml(todoText);
        }
    })
    todoInput.addEventListener("change" , (event)=>{
        // This call back method is fired everytime there is a change in the input tag
        const todoText = event.target.value;

        event.target.value = todoText.trim();

        console.log(event.target.value);
    });
    loadTodos();
})