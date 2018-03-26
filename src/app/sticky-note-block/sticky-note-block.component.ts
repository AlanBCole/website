import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sticky-note-block',
  templateUrl: './sticky-note-block.component.html',
  styleUrls: ['./sticky-note-block.component.css']
})
export class StickyNoteBlockComponent implements OnInit {

  isAddSignShown = false;
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
  }
}
