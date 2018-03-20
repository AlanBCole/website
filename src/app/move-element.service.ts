import { Injectable, Output, EventEmitter } from '@angular/core';

import { NotePosition } from './note-position.model';

@Injectable()
export class MoveElementService {
    @Output() changeNotePosition: EventEmitter<NotePosition> = new EventEmitter();
    zIndex = 0;
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth;

    transformPositionsToPercentages(top: string, left: string): { top: string, left: string } {
    /*
    * this method is to change the "XXpx" string value stored in
    * HTMLElement.style.top/left to the "XX%" string value so that the note
    * positions will be responsive.
    */
        if (top.includes('px') || left.includes('px')) {

            const topPositionNumber = parseInt(top.replace('px', ''), 10);
            // console.log('transformPositions top: ' + topPositionNumber);
            const leftPositionNumber = parseInt(left.replace('px', ''), 10);
            // console.log('transformPositions left: ' + leftPositionNumber);

            const topPercentage = ((topPositionNumber / this.screenHeight) * 100).toString() + '%';
            const leftPercentage = ((leftPositionNumber / this.screenWidth) * 100).toString() + '%';

            return { top: topPercentage, left: leftPercentage };

        } else {

            return { top: top, left: left };
        }
    }

    moveElement(event, i) {
        this.zIndex += 1;

        let position1 = 0;
        let position2 = 0;
        let position3 = 0;
        let position4 = 0;

        const element: HTMLElement = event.target;
        element.classList.add('moving');
        element.style.zIndex = this.zIndex.toString();

        position3 = event.clientX;
        position4 = event.clientY;

        document.onmousemove = (ev: MouseEvent) => {
            position1 = position3 - ev.clientX;
            position2 = position4 - ev.clientY;
            position3 = ev.clientX;
            position4 = ev.clientY;

            const topNumber = element.offsetTop - position2;
            const leftNumber = element.offsetLeft - position1;

            element.style.top = topNumber.toString() + 'px';
            element.style.left = leftNumber.toString() + 'px';
        };

        document.onmouseup = () => {
            element.classList.remove('moving');
            if (element.className === 'sticky-note') {

                const topAndLeftPositions = this.transformPositionsToPercentages(element.style.top, element.style.left);

                const notePosition: NotePosition = {
                    top: topAndLeftPositions.top,
                    left: topAndLeftPositions.left,
                    noteIndex: i
                };

                this.changeNotePosition.emit(notePosition);
            }

            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
}

