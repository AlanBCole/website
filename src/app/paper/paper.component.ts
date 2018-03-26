import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-paper',
    templateUrl: './paper.component.html',
    styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {
    info: string;
    constructor() { }

    ngOnInit() {
        const paper = document.querySelector('.paper');
    }

    moveOutline(info: string) {
        this.info = info;
        const outline = document.querySelector('.outline');
        outline.classList.toggle('see-outline');
    }
}
