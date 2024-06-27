document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let newTodo = document.getElementById('newTodo').value;

    if (newTodo.trim() === '') {
        alert('Please enter a todo.');
        return;
    }

    let li = document.createElement('li');
    li.textContent = newTodo;
    document.getElementById('todoList').appendChild(li);
    document.getElementById('newTodo').value = '';
});
