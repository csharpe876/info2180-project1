/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('#email');
    const messageDiv = document.querySelector('.message');
    
    // Array to store previously submitted email addresses
    const submittedEmails = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        const email = emailInput.value.trim();
        
        if (email === '') {
            const errorMessage = 'Please enter a valid email address.';
            messageDiv.textContent = errorMessage;
            alert(errorMessage);
        } else if (submittedEmails.includes(email.toLowerCase())) {
            const duplicateMessage = `This email address ${email} has already been added to our mailing list.`;
            messageDiv.textContent = duplicateMessage;
            alert(duplicateMessage);
        } else {
            // Add email to the submitted emails array
            submittedEmails.push(email.toLowerCase());
            const successMessage = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.textContent = successMessage;
            alert(successMessage);
        }
    });
});