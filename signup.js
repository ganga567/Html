const registrationForm = document.getElementById('registrationForm');
const registrationPopup = document.getElementById('registrationPopup');
const closePopupButton = document.getElementById('closePopup');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const enterdob = document.getElementById('enterdob').value;
    const choosecountry = document.getElementById('choosecountry').value;
    const description= document.getElementById('description').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Simulate successful registration
    registrationPopup.style.display = 'block';

    closePopupButton.addEventListener('submit', () => {
        registrationPopup.style.display = 'none';
        window.location.href = 'signup.html'; // Replace with your actual sign-in page URL
   });
});