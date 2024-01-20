const form = document.querySelector('#form');
const names = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

// function sendEmail(event) {
//     event.preventDefault();
//     let body = 'Name :' + names.value + "<br/> Email :" + email.value + "<br/> Phone :" + phone.value + "<br/> Subject :" + subject.value + "<br/> Message :" + message.value;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "ahsanali45444@gmail.com",
//         Password: "82626F54813F9DB1A8A08E76FFB06058BA31",
//         To: 'fida35636@gmail.com',
//         From: "ahsanali45444@gmail.com",
//         Subject: "This is the subject",
//         Body: "And this is the body"
//     }).then(
//         message => alert(message)
//     );

//

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Function Called');

})

Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ahsanali45444@gmail.com",
    Password: "82626F54813F9DB1A8A08E76FFB06058BA31",
    To: 'ahsanali45444@gmail.com',
    From: "ahsanali45444@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body"
}).then(
    message => alert(message)
);