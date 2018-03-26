import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-outline',
    templateUrl: './outline.component.html',
    styleUrls: ['./outline.component.css']
})
export class OutlineComponent implements OnInit {
    @Input() info: string;
    @Output() moveOutline = new EventEmitter<string>();

    ngOnInit() {
    }

    moveThisOutline() {
        this.moveOutline.emit('closing ' + this.info);
    }
}
