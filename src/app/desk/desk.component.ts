import { Component, OnInit } from '@angular/core';

import { Note } from './note.model';
@Component({
    selector: 'app-desk',
    templateUrl: './desk.component.html',
    styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {
    notes: Note[] = [
        new Note('Jerry', 'Springer', 'just stopped by', 'I need to talk to you about the show! Call me. 312.325.9090'),
        new Note('Larry', 'Sanders', 'I have a project for you.', 'I know I am not real, but I want you to build an app for me!')
    ];
        constructor() { }

        ngOnInit() {
        }

    }
