import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Note } from './note.model';

@Injectable()
export class FirebaseService {
    constructor(private firebase: HttpClient) {}

    getNotes() {
        return this.firebase.get<Note[]>('https://alanbcolecodewebsite.firebaseio.com/stickyNotes.json');
    }

    addNote(notes) {
        return this.firebase.put('https://alanbcolecodewebsite.firebaseio.com/stickyNotes.json', notes);
    }

    addChangesToNote(changedNote, index) {
        return this.firebase.patch('https://alanbcolecodewebsite.firebaseio.com/stickyNotes/' + index + '.json', changedNote);
    }

// for experimenting with put request
    getOtherNotes() {
    return this.firebase.get<Note[]>('https://alanbcolecodewebsite.firebaseio.com/otherStickyNotes.json');
    }

    addOtherNote(Notes) {
        return this.firebase.put('https://alanbcolecodewebsite.firebaseio.com/otherStickyNotes.json', Notes);
    }

    addChangesToOtherNote(changedNote, index) {
        return this.firebase.patch('https://alanbcolecodewebsite.firebaseio.com/otherStickyNotes/' + index + '.json', changedNote);
    }
}
