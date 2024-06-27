document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Here you would typically send login data to server for validation
    // For simplicity, let's assume login is successful and redirect to todo list
    alert('Login successful!');
    window.location.href = 'todo.html';
});
