import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sticky-note',
    templateUrl: './sticky-note.component.html',
    styleUrls: ['./sticky-note.component.css']
})

export class StickyNoteComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    moveNote(event) {
        let position1 = 0;
        let position2 = 0;
        let position3 = 0;
        let position4 = 0;

        console.log('mousedown!');
        const note = event.target;
        note.classList.add('moving');
        console.log(event);

        position3 = event.clientX;
        position4 = event.clientY;
        console.log(position3, position4);

        document.onmouseup = function() {

          console.log('mouseup!, Did it move?');
          note.classList.remove('moving');
          document.onmouseup = null;
          document.onmousemove = null;
        };

        document.onmousemove = function(ev) {
          console.log(ev);
          position1 = position3 - ev.clientX;
          position2 = position4 - ev.clientY;
          position3 = ev.clientX;
          position4 = ev.clientY;

          note.style.top = (note.offsetTop - position2) + 'px';
          note.style.left = (note.offsetLeft - position1) + 'px';
        };
    }
}
