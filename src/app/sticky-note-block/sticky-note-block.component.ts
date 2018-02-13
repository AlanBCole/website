import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-note-block',
  templateUrl: './sticky-note-block.component.html',
  styleUrls: ['./sticky-note-block.component.css']
})
export class StickyNoteBlockComponent implements OnInit {

  isAddSignShown: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showAddSign() {
    this.isAddSignShown = !this.isAddSignShown;
    if (this.isAddSignShown) {
      console.log('show the add sign');
    } else {
      console.log('hide the add sign');
    }
  }

  leaveANote() {
    console.log('I\'m trying to make a new note but I need to do a few things first:');
    console.log('  1. put the notes in an array/model', ' 2.  *ngFor', '3. template binding stuff', '4. create a modal for the note.');
  }
}
