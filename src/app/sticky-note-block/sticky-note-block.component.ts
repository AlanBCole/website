import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sticky-note-block',
  templateUrl: './sticky-note-block.component.html',
  styleUrls: ['./sticky-note-block.component.css']
})
export class StickyNoteBlockComponent implements OnInit {

  isAddSignShown: Boolean = false;
  @Output() showNewNoteModal = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  showAddSign() {
    this.isAddSignShown = true;
  }

  hideAddSign() {
    this.isAddSignShown = false;
  }

  leaveANote() {
    this.showNewNoteModal.emit(true);
    console.log('I\'m trying to make a new note but I need to do a few things first:');
    console.log('  1. put the notes in an array/model', ' 2.  *ngFor', '3. template binding stuff', '4. create a modal for the note.');
  }
}
