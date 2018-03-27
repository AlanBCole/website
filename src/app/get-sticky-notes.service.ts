import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable()
export class GetStickyNotesService {

    checkGetResponse(response: Note[]): Note[] {
        let notes: Note[] = [];

        if (response && response.length < 4) {
            notes = response;
            return notes;

        } else if (response.length > 3) {

            for (let i = (response.length - 3); i < response.length; i++) {
                notes.push(response[i]);
            }
            return notes;

        } else {
            const note = this.makeNote();
            notes.push(note);
            return notes;
        }
    }

    makeNote(): Note {
        const note = {
            firstName: 'Justin',
            lastName: 'Teem',
            reasonForNote: 'Just saying hi!',
            message: 'first note',
            email: 'test',
            company: 'test',
            topPosition: '10%',
            leftPosition: '10%',
        };
        return note;
    }
}