export class Note {
    static index: number;
    newNotePositionAdjust = 10;
    firstName: string;
    lastName: string;
    reasonForNote: string;
    message: string;

    constructor(firstName: string, lastName: string, reason: string, message: string) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.reasonForNote = reason;
        this.message = message;

        Note.index += 1;
        console.log(this);
    }
}
