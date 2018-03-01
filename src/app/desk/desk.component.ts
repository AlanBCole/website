import { Component, OnInit } from '@angular/core';

import { Note } from '../note.model';
@Component({
    selector: 'app-desk',
    templateUrl: './desk.component.html',
    styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {

    notes: Note[] = [
        new Note('Jerry', 'Springer', 'just stopped by', 'I need to talk to you about the show! Call me. 312.325.9090', 'hey@hey.com', "ACME company"),
        new Note('Larry', 'Sanders', 'I have a project for you.', 'I know I am not real, but please build an app for me!', 'hey@hey.com', "ACME company")
    ];
    isModalShown = false;

        constructor() { }

        ngOnInit() {
        }

    showOnDeskNewNoteModal(event: boolean) {
        console.log('from the desktop, show newNoteModal?', event);
        this.isModalShown = event;
    }

    addNewNoteToDesk(newNote: Note) {
        this.notes.push(newNote);
        this.isModalShown = false;
    }

    }
