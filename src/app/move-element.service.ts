import { Injectable } from '@angular/core';

@Injectable()
export class MoveElementService {

    moveElement(event) {
        let position1 = 0;
        let position2 = 0;
        let position3 = 0;
        let position4 = 0;

        console.log('mousedown!');
        const element = event.target;
        element.classList.add('moving');
        console.log(event);

        position3 = event.clientX;
        position4 = event.clientY;
        console.log(position3, position4);

        document.onmouseup = function() {

            console.log('mouseup!, Did it move?');
            element.classList.remove('moving');
            document.onmouseup = null;
            document.onmousemove = null;
        };

        document.onmousemove = function(ev) {
            console.log(ev);
            position1 = position3 - ev.clientX;
            position2 = position4 - ev.clientY;
            position3 = ev.clientX;
            position4 = ev.clientY;

            element.style.top = (element.offsetTop - position2) + 'px';
            element.style.left = (element.offsetLeft - position1) + 'px';
        };
    }
}

