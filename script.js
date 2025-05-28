function loadTodos(){
    // This function will be used to load the todos from the database
    const todos = JSON.parse(localStorage.getItem("todos")) || {"todoList" : []};
    console.log(todos);
    return todos;
}

// This function will add the given todo to the local storage
function addTodosToLocalStorage(todo){
    const todos = loadTodos();
    todos.todoList.push(todo);
    localStorage.setItem("todos" , JSON.stringify(todos));
}

function appendTodoInHtml(todo){
    const todoList = document.getElementById("todoList");
    const todoItem = document.createElement("li");

    const textDiv = document.createElement("div");

    textDiv.textContent = todo.text;
    todoItem.classList.add("todoItem");
    
    const wrapper = document.createElement("div");
    wrapper.classList.add("todoButtons");
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed";
    completedBtn.classList.add("completedBtn");

    wrapper.appendChild(editBtn);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(completedBtn);

    todoItem.append(textDiv);
    todoItem.appendChild(wrapper);
    todoList.appendChild(todoItem);
}

document.addEventListener("DOMContentLoaded" , ()=>{
    const todoInput = document.getElementById("todoInput");
    console.log(todoInput);
    
    const submitButton = document.getElementById("addTodo");

    const todoList = document.getElementById("todoList");

    submitButton.addEventListener("click" , (event)=>{
        const todoText = todoInput.value;
        console.log(todoText);
        if(todoText == ''){
            alert("Please write something for todo");
        }else{
            addTodosToLocalStorage({text : todoText , isCompleted:false});
            appendTodoInHtml({text : todoText , isCompleted:false});
            todoInput.value = '';
        }
    })
    todoInput.addEventListener("change" , (event)=>{
        // This call back method is fired everytime there is a change in the input tag
        const todoText = event.target.value;
        
        event.target.value = todoText.trim();

        console.log(event.target.value);
    });
    const todos = loadTodos();
    todos.todoList.forEach((todo)=>{
        appendTodoInHtml(todo);
    })
})