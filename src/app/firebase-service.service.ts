import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Note } from './note.model';

@Injectable()
export class FirebaseService {
    constructor(private firebase: HttpClient) {}

    getNotes() {
        return this.firebase.get<Note[]>('https://alanbcolecodewebsite.firebaseio.com/stickyNotes.json');
    }

    addNote(newNote, index) {
        return this.firebase.patch('https://alanbcolecodewebsite.firebaseio.com/stickyNotes/' + index + '.json', newNote);
    }

    addChangesToNote(changedNote, index) {
        return this.firebase.patch('https://alanbcolecodewebsite.firebaseio.com/stickyNotes/' + index + '.json', changedNote);
    }
}
