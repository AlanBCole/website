import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable()
export class GetStickyNotesService {

    notesThreeOrLess(notes: Note[]) {
        if (!notes) {
            return this.makeNote();
        } else if (notes.length < 4) {
            return notes;
        } else {
            const lastThreeNotes = notes.filter((note, index) => {
                return index > notes.length - 4;
            });
            return lastThreeNotes;
        }
    }

    makeNote(): Note[] {
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
        return [note];
    }
}
