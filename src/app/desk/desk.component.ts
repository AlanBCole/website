import { Component, OnInit } from '@angular/core';

import { Note } from '../note.model';
import { NoteService } from '../note-service.service';

@Component({
    selector: 'app-desk',
    templateUrl: './desk.component.html',
    styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
    notes = this.noteService.notes;
    isModalShown = false;

    constructor(private noteService: NoteService) { }

    ngOnInit() {
    }

    showOnDeskNewNoteModal(event: boolean) {
        console.log('from the desktop, show newNoteModal?', event);
        this.isModalShown = event;
    }

    addNewNoteToDesk(newNote: Note) {
        this.notes.push(newNote);
        this.isModalShown = false;
        console.log('desktop - is the modal shown?', this.isModalShown);
        console.log('desktop - note added: ', this.notes[0]);
    }

    }
