import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirebaseService {

    getNotes() {
        return this.firebase.get('https://alanbcolecodewebsite.firebaseio.com/stickyNotes.json');
    }

    addNote(newNote) {
        return this.firebase.put('https://alanbcolecodewebsite.firebaseio.com/stickyNotes.json', newNote);
    }

    constructor(private firebase: HttpClient) {}
}
