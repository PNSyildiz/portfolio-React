// const form = document.querySelector('form');
// const fname = document.getElementById("name");
// const message = document.getElementById("message");
// const subject = document.getElementById("subject");

// function sendEmail(){
//     const bodyMessage = `fname: ${fname.value}<br>
//  Message: ${message.value} <br> subject: ${subject.value}` ;
// }

// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "pascoasekgota27@gmail.com",
//         Password : "8D4F09CA9A8374A1AF848EC6E9B5ADEE0332",
//         To : 'pascoasekgota27@gmail.com',
//         From : "pascoasekgota27@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage,
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("submit", (e)=>{
//     e.preventDefault();

//     sendEmail();
// });

$('#ripple').ripple({
    resolution:512,
    dropRadius:20,
    perturbance: 0.04,
})