export class Note {
    firstName: string;
    lastName: string;
    reasonForNote: string;
    message: string;
    email: string;

    constructor(firstName: string, lastName: string, reason: string, message: string, email: string) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.reasonForNote = reason;
        this.message = message;
        this.email = email;
    }
}
