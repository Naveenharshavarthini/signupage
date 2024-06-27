document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Here you can perform validation or send data to server for signup process
    // For simplicity, we'll just redirect to login page after signup
    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
});
