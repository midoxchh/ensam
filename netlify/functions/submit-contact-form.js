const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const secretKey = '6Lchiw8qAAAAAD4XoD6bZK5ASz9evaJo9syxsE75';
  const token = JSON.parse(event.body)['g-recaptcha-response'];
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  const response = await fetch(verificationUrl, {
    method: 'POST',
  });
  const data = await response.json();

  if (!data.success) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'reCAPTCHA verification failed' }),
    };
  }

  // Continue with your form handling logic (e.g., save data, send email, etc.)
  // Here, you might want to save the data to a database or send an email.
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submitted successfully' }),
  };
};
