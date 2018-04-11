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
            const lastThreeNotes = notes.map((note, index) => {
                if (index > notes.length - 4) {
                    return {
                        ...note,
                        isDisplayed: true
                    };
                } else {
                    return {
                        ...note,
                        isDisplayed: false
                    };
                }
            })
            // .filter((note) => note.isDisplayed); //this messes with the moveService.changeNotePosition method
            // as the indexes of the displayed notes no longer matched those in the firebase database.
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
            isDisplayed: true,
        };
        return [note];
    }
}
