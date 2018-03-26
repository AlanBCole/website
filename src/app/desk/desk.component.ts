import { Component, OnInit } from '@angular/core';

import { Note } from '../note.model';
import { FirebaseService } from '../firebase-service.service';
import { MoveElementService } from '../move-element.service';
import { error } from 'util';

@Component({
    selector: 'app-desk',
    templateUrl: './desk.component.html',
    styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {

    stickyNotes: Note[];
    isModalShown = false;

    constructor(
        private firebase: FirebaseService,
        public moveService: MoveElementService) {}

    ngOnInit() {
        this.firebase.getNotes()
            .subscribe((response) => {
                if (!response) {
                    this.stickyNotes = [
                        {
                            firstName: 'Justin',
                            lastName: 'Teem',
                            reasonForNote: 'Just saying hi!',
                            message: 'first note',
                            email: 'test',
                            company: 'test',
                            topPosition: '10%',
                            leftPosition: '10%',
                        }
                    ];
                } else if (response) {

                    const noteResponse = [];
                    response.forEach((note) => {
                        if (note) {
                            noteResponse.push(note);
                        }
                    });

                    this.stickyNotes = noteResponse;
                    console.log('from firebase /stickyNotes ', response);
                    console.log('stickyNotes after forEach() ', this.stickyNotes);

                    this.firebase.addNote(this.stickyNotes)
                        .subscribe();
                }
            });

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
