import { Component, OnInit } from '@angular/core';
import { MoveElementService } from '../move-element.service';

@Component({
    selector: 'app-sticky-note',
    templateUrl: './sticky-note.component.html',
    styleUrls: ['./sticky-note.component.css']
})

export class StickyNoteComponent implements OnInit {

    constructor(private moveService: MoveElementService) { }

    ngOnInit() {
    }

}
