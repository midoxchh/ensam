document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Basic validation
    let fullName = document.getElementById('full-name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let message = document.getElementById('message').value.trim();

    if (!fullName || !email || !phone || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // reCAPTCHA validation
    let recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length == 0) {
        alert('Please complete the CAPTCHA.');
        return;
    }

    // Set reCAPTCHA response value
    document.getElementById('g-recaptcha-response').value = recaptchaResponse;

    // If all validations pass, submit the form
    document.getElementById('contact-form').submit();
});