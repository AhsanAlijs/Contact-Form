const form = document.querySelector('#form');
const names = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

function sendEmail(event) {
    event.preventDefault();
    let body = 'Name :' + names.value + "<br/> Email :" + email.value + "<br/> Phone :" + phone.value + "<br/> Subject :" + subject.value + "<br/> Message :" + message.value;
    


    Email.send({
        SecureToken: '58c55465-d41e-42b4-9d76-d282b83e01f4',
        To: `ahsanali45444@gmail.com`,
        From: `ahsanali45444@gmail.com`,
        Subject: `message from contact`,
        Body: body
    }).then(
        message => alert(message)
    );

}
