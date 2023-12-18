document.getElementById('signup-btn').addEventListener('click', function() {

    let registrationForm = `
        <form id="registration-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <br>
            <input type="submit" value="Sign Up">
        </form>
    `;

    // Remove the signup button and replace it with the registration form
    document.getElementById('registrationForm').outerHTML = registrationForm;

    // Add a submit event listener to the registration form
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Retrieve the input values
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Perform the registration process here
        console.log('Signed up with username:', username, 'email:', email, 'password:', password);
    });
});
document.getElementById('signin').addEventListener('click', function () {
    alert('You clicked the Sign In button');
});

document.getElementById('signup').addEventListener('click', function () {
    alert('You clicked the Sign Up button');
});