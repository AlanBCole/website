"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
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
    return { me: mailTransport.sendMail(toMe), sender: mailTransport.sendMail(toSender) };
}
exports.sendEmail = functions.database.ref('/stickyNotes/{note}').onCreate((event) => {
    const newStickyNote = event.data.val();
    const messageToMe = {
        from: '"AlanBColeCodingWebsite" <noreply@code.io>',
        to: gmailEmail,
        subject: newStickyNote.reasonForNote,
        html: `
            <p>Name: ${newStickyNote.firstName} ${newStickyNote.lastName}</p>
            <p>Email: ${newStickyNote.email}</p>
            <p>Company: ${newStickyNote.company}</p>
            <p>${newStickyNote.message}</p>`
    };
    const messageToSender = {
        from: '"AlanBColeCodingWebsite" <noreply@code.io>',
        to: newStickyNote.email,
        subject: 'Thank you for contacting me',
        html: `
            <h2>You left me the following note. Thanks!</h2>
            <p>Name: ${newStickyNote.firstName} ${newStickyNote.lastName}</p>
            <p>Email: ${newStickyNote.email}</p>
            <p>Company: ${newStickyNote.company}</p>
            <p>${newStickyNote.message}</p>`
    };
    const emails = sendEmails(messageToMe, messageToSender);
    emails.me
        .then((res) => console.log(`email to me: ${messageToMe.to} `, res))
        .catch((err) => console.log(`problem with email to me: ${messageToMe.to} `, err));
    emails.sender
        .then((res) => console.log(`email to sender: ${messageToSender.to}: `, res))
        .catch((err) => console.log(`problem with email to sender: ${messageToSender.to}: `, err));
});
//# sourceMappingURL=index.js.map