import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../note.model';
import { NotePosition } from '../note-position.model';

@Component({
    selector: 'app-sticky-note',
    templateUrl: './sticky-note.component.html',
    styleUrls: ['./sticky-note.component.css']
})

export class StickyNoteComponent implements OnInit {

    @Input()
    stickyNote: Note;

    constructor() { }

    ngOnInit() {}
}
