import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-info',
    templateUrl: './my-info.component.html',
    styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {
    info: string;
    constructor() { }

    ngOnInit() {
    }

    moveOutline(info: string) {
        this.info = info;
        const outline = document.querySelector('.outline');
        outline.classList.toggle('see-outline');
    }
}
