import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable()
export class NoteService {

  notes: Note[] = [
    new Note(
        'Jerry',
        'Springer',
        'just stopped by',
        'I need to talk to you about the show! Call me. 312.325.9090',
        'hey@hey.com',
        'ACME company'),
    new Note(
        'Larry',
        'Sanders',
        'I have a project for you.',
        'I know I am not real, but please build an app for me!',
        'hey@hey.com',
        'ACME company')
  ];

  constructor() { }

}
