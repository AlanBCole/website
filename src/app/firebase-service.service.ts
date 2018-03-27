import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GetStickyNotesService } from './get-sticky-notes.service';
import { Note } from './note.model';
import { Me } from './me.model';
// import { not } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class FirebaseService {
    constructor(
        private firebase: HttpClient,
        private check: GetStickyNotesService) {}

    getNotes(): any {
        return this.firebase.get<Note[]>('https://alanbcolecodewebsite.firebaseio.com/stickyNotes.json')
            .subscribe(
                (response) => {
                    console.log(response);
                    const notes: Note[] = response;
                },
                (err) => {
                    console.log(err);
                }
            );
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

    addMe(me: Me) {
        return this.firebase.put('https://alanbcolecodewebsite.firebaseio.com/me', me);
    }
}
