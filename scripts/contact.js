// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get submit and contact elements
const submitButton = document.getElementById('submit-button');
const contactPage = document.getElementById('contact-page');

// Submit button is clickedd
submitButton.addEventListener('click', function(event) {
    // Stop
    event.preventDefault();

    // New element
    const thankYouMessage = document.createElement('p');

    // Message Thank You
    thankYouMessage.textContent = 'Thank you for your message';

    thankYouMessage.style.fontSize = '24px';

    // Remove content
    contactPage.innerHTML = '';

    contactPage.appendChild(thankYouMessage);
});