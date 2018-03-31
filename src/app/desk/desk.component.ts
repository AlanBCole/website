import { Component, OnInit } from '@angular/core';

import { Note } from '../note.model';
import { FirebaseService } from '../firebase-service.service';
import { MoveElementService } from '../move-element.service';
import { GetStickyNotesService } from '../get-sticky-notes.service';

@Component({
    selector: 'app-desk',
    templateUrl: './desk.component.html',
    styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
    notesFromFirebase: Note[];
    stickyNotes: Note[];
    isModalShown = false;

    constructor(
        private firebase: FirebaseService,
        public moveService: MoveElementService,
        private checkNotes: GetStickyNotesService) {}

    ngOnInit() {

        this.firebase.getNotes()
            .subscribe((res) => {
                console.log('GET response: ', res);
                const filteredFromFirebase = this.checkNotes.notesThreeOrLess(res);
                console.log('filtered: ', filteredFromFirebase);
                this.stickyNotes = filteredFromFirebase;
            });

        // console.log(this.checkNotes.notesThreeOrLess(notesFromFirebase));

        this.moveService.changeNotePosition.subscribe(
            (newNotePosition) => {
                const index = newNotePosition.noteIndex;
                const changedNote = this.stickyNotes[index];

                changedNote.topPosition = newNotePosition.top;
                changedNote.leftPosition = newNotePosition.left;

                this.firebase.addChangesToNote(changedNote, index)
                    .subscribe();
                    // .subscribe(response => console.log(response));
            }
        );
    }

    showOnDeskNewNoteModal(event: boolean) {
        this.isModalShown = event;
    }

    addNewNoteToDesk(newNote: Note) {
        // const index = this.stickyNotes.length;
        this.stickyNotes.push(newNote);
        console.log('notes on desk -', this.stickyNotes);

        this.firebase.addNote(this.stickyNotes)
            .subscribe((res) => {
                console.log('put request firebase', res);
                console.log(this.stickyNotes);
            });
        this.isModalShown = false;
    }
}
