import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../desk/note.model';
import { MoveElementService } from '../move-element.service';

@Component({
    selector: 'app-sticky-note',
    templateUrl: './sticky-note.component.html',
    styleUrls: ['./sticky-note.component.css']
})

export class StickyNoteComponent implements OnInit {

    @Input()
    stickyNote: Note;

    constructor(private moveService: MoveElementService) { }

    ngOnInit() {
        console.log(this.stickyNote);
    }
}
