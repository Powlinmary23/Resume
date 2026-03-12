document.addEventListener('DOMContentLoaded', function () {

    const todoinput = document.getElementById('todoinput');
    const addtodobutton = document.getElementById('addtodoinput');
    const todoList = document.getElementById('todolist');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function renderTodos() {
        todoList.innerHTML = '';

        todos.forEach((todo, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

            if (todo.completed) {
                listItem.classList.add('completed');
            }

            listItem.textContent = todo.text;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm';
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', () => {
                deleteTodo(index);
            });

            listItem.addEventListener('click', () => {
                toggleTodoComplete(index);
            });

            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
        });
    }

    function deleteTodo(index) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
    }

    function toggleTodoComplete(index) {
        todos[index].completed = !todos[index].completed;
        saveTodos();
        renderTodos();
    }

    function addTodo() {
        const taskText = todoinput.value.trim();
        if (taskText === '') return;

        todos.push({ text: taskText, completed: false });
        todoinput.value = '';
        saveTodos();
        renderTodos();
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    addtodobutton.addEventListener('click', addTodo);

    todoinput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

    renderTodos();
});