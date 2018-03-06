import { Injectable, Output, EventEmitter } from '@angular/core';

import { NotePosition } from './note-position.model';

@Injectable()
export class MoveElementService {
    @Output()
    changeNotePosition: EventEmitter<NotePosition> = new EventEmitter();

    moveElement(event) {
        let position1 = 0;
        let position2 = 0;
        let position3 = 0;
        let position4 = 0;

        const element = event.target;
        element.classList.add('moving');

        position3 = event.clientX;
        position4 = event.clientY;

        element.onmousemove = function(ev) {
            position1 = position3 - ev.clientX;
            position2 = position4 - ev.clientY;
            position3 = ev.clientX;
            position4 = ev.clientY;

            element.style.top = (element.offsetTop - position2) + 'px';
            element.style.left = (element.offsetLeft - position1) + 'px';
        };

        element.onmouseup = function() {
            element.classList.remove('moving');

            const notePosition = {
                top: element.style.top,
                left: element.style.left
            };

            this.changeNotePosition.emit(notePosition);

            element.onmouseup = null;
            element.onmousemove = null;
        };
    }
}

