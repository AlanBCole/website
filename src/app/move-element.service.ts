import { Injectable, Output, EventEmitter } from '@angular/core';

import { NotePosition } from './note-position.model';

@Injectable()
export class MoveElementService {
    @Output() changeNotePosition: EventEmitter<NotePosition> = new EventEmitter();
    zIndex = 0;

    moveElement(event, i) {

        this.zIndex += 1;

        let position1 = 0;
        let position2 = 0;
        let position3 = 0;
        let position4 = 0;

        const element = event.target;
        element.classList.add('moving');
        element.style.zIndex = this.zIndex;

        position3 = event.clientX;
        position4 = event.clientY;

        document.onmousemove = (ev: MouseEvent) => {
            position1 = position3 - ev.clientX;
            position2 = position4 - ev.clientY;
            position3 = ev.clientX;
            position4 = ev.clientY;

            element.style.top = (element.offsetTop - position2).toString() + 'px';
            element.style.left = (element.offsetLeft - position1).toString() + 'px';
        };

        document.onmouseup = () => {
            element.classList.remove('moving');
            if (element.className === 'sticky-note') {

                const notePosition: NotePosition = {
                    top: element.style.top,
                    left: element.style.left,
                    noteIndex: i
                };

                this.changeNotePosition.emit(notePosition);
            }


            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
}

