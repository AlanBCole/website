"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
exports.sendEmail = functions.database.ref('/stickyNotes/{note}').onCreate((event) => {
    const stickyNotes = event.data.val();
    const newNote = stickyNotes[stickyNotes.length - 1];
    console.log(stickyNotes);
});
//# sourceMappingURL=index.js.map