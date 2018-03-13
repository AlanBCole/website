import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
});

function sendEmails(toMe, toSender) {
    mailTransport.send(toMe)
        .then(() => {console.log('sent email to: ' + toMe.to)});
    mailTransport.send(toSender)
    .then(() => {console.log('sent email to: ' + toSender.to)});
}

export const sendEmail = functions.database.ref('/stickyNotes/{note}').onCreate((event) => {
    const newStickyNote = event.data.val()

    const messageToMe = {
        from: '"AlanBColeCodingWebsite" <noreply@code.io>',
        to: gmailEmail,
        subject: newStickyNote.reasonForNote,
        html: '<p>' + newStickyNote.message + '</p><p> Name: ' + newStickyNote.firstName + ' ' + newStickyNote.lastname + '</p><p> Email: ' + newStickyNote.email + '</p><p> Company: ' + newStickyNote.company + '</p>' 
    }

    const messageToSender = {
        from: '"AlanBColeCodingWebsite" <noreply@code.io>',
        to: newStickyNote.email,
        subject: 'Thank you for contacting me',
        html: '<h2>This is what you sent me: </h2><p>' + newStickyNote.message + '</p><p> Name: ' + newStickyNote.firstName + ' ' + newStickyNote.lastname + '</p><p> Email: ' + newStickyNote.email + '</p><p> Company: ' + newStickyNote.company + '</p>'
    }

    return sendEmails(messageToMe, messageToSender);
})