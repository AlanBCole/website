import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Note } from '../note.model';
import { FirebaseService } from '../firebase-service.service';
import { MoveElementService } from '../move-element.service';

@Component({
    selector: 'app-desk',
    templateUrl: './desk.component.html',
    styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
    // private stickyNotesCollection: AngularFirestoreCollection<Note>;
    stickyNotes = [];
    isModalShown = false;

    constructor(
        private firebase: FirebaseService,
        private moveService: MoveElementService) {}

    ngOnInit() {
        this.firebase.getNotes()
            .subscribe((response: Response) => {
                console.log(response);
            });

        this.moveService.changeNotePosition.subscribe((newNotePosition) => {
            this.stickyNotes[newNotePosition.noteIndex].topPosition = newNotePosition.top;
            this.stickyNotes[newNotePosition.noteIndex].leftPosition = newNotePosition.left;
        });
    }

    showOnDeskNewNoteModal(event: boolean) {
        console.log('from the desktop, show newNoteModal?', event);
        this.isModalShown = event;
    }

    addNewNoteToDesk(newNote: Note) {
        this.stickyNotes.push(newNote);
        this.firebase.addNote(this.stickyNotes)
            .subscribe((response: Response) => {
                console.log(response);
        });

        this.firebase.getNotes()
            .subscribe((response: Response) => {
                console.log(response);
            });
        this.isModalShown = false;
        console.log('desktop - note added: ', this.stickyNotes[0]);
    }
}
