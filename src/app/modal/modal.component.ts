import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Note } from '../note.model';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    newStickyNote: Note;
    reasonsForNote = [
        'Just saying hi!',
        'I have a project for you.',
        'I\'d like to talk to you'
    ];
    @Output() showNewNoteModal = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
    }

    closeThisModal() {
        this.showNewNoteModal.emit(false);
    }
}
