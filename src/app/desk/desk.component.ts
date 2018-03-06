import { Component, OnInit } from '@angular/core';

import { Note } from '../note.model';
import { NoteService } from '../note-service.service';
import { MoveElementService } from '../move-element.service';

@Component({
    selector: 'app-desk',
    templateUrl: './desk.component.html',
    styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
    notes = this.noteService.notes;
    isModalShown = false;

    constructor(
        private noteService: NoteService,
        private moveService: MoveElementService) { }

    ngOnInit() {
        this.moveService.changeNotePosition.subscribe((newNotePosition) => {
            this.notes[newNotePosition.noteIndex].topPosition = newNotePosition.top;
            this.notes[newNotePosition.noteIndex].leftPosition = newNotePosition.left;
        });
    }

    showOnDeskNewNoteModal(event: boolean) {
        console.log('from the desktop, show newNoteModal?', event);
        this.isModalShown = event;
    }

    addNewNoteToDesk(newNote: Note) {
        this.notes.push(newNote);
        this.isModalShown = false;
        console.log('desktop - note added: ', this.notes[0]);
    }
}
