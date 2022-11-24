const submitEmail = document.getElementById('submitEmail');
submitEmail.addEventListener('click', sendEmail);

function sendEmail(sender, email, message) {
  
  sender = document.getElementById("sender").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;

Email.send({
SecureToken : "a32021ae-050a-43d2-9e24-b5b9e579d175",
To : 'osodracdigital@gmail.com',
From: 'osodracdigital@gmail.com',
Subject: `${sender} enviou uma mensagem `,
Body: `${message}`
})
.then(function (message) {
alert("Email successfully sent")
});

}
