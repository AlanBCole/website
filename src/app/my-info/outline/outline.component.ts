import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { FirebaseService } from '../../firebase-service.service';
import { Me } from '../../me.model';

@Component({
    selector: 'app-outline',
    templateUrl: './outline.component.html',
    styleUrls: ['./outline.component.css']
})
export class OutlineComponent implements OnInit {
    myInfo: string;
    isAboutMe = false;
    isSkills = false;
    isExperience = false;
    @Input() set whichInfo(info) {
        this.myInfo = info;
        switch (info) {
            case 'aboutMe':
                this.isAboutMe = true;
                this.isSkills = false;
                this.isExperience = false;
                break;
            case 'skills':
                this.isAboutMe = false;
                this.isSkills = true;
                this.isExperience = false;
                break;
            case 'skills':
                this.isAboutMe = false;
                this.isSkills = false;
                this.isExperience = true;
                break;
            default:
                this.isAboutMe = false;
                this.isSkills = false;
                this.isExperience = false;
                break;
        }
    }
    get whichInfo() {
        return this.myInfo;
    }

    me: Me = {
        name: 'Alan Cole',
        aboutMe: {
            portrait: '/assets/images/me.jpg',
            about: [
                'I am pretty nice.',
                'Very fun to be around.',
                'Great attention to detail',
                'love to learn new things'
            ],
        },
        skills: {
            skillsList: [
                'Full-Stack Web Dev: JavaScript, Typescript, Angular4+, Node.js, Express.js, MongoDB, Bootstrap, Material Design, HTML5, CSS3',
                'Mobile Development: iOS/swift, Progressive Web Apps',
                'Version Control: Git, Github',
                'Object Oriented Programing (Typescript, Swift)',
                'Deployment and shell scripting',
                'Agile development methodology'
            ],
            socialLinks: [
                {
                    title: 'Github',
                    link: 'https://www.github.com/AlanBCole',
                },
                {
                    title: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/alan-cole-4769b0133/'
                }
            ],
        },
        experience: [
            {
                title: 'QA Developer, Junior iOS Developer',
                description: [
                    'Wrote unit tests is Swift using XCTest framework',
                    'Designed testing plans',
                    'Wrote and maintained app features in Swift',
                    'Worked in an Agile team'
                ],
                picture: 'https://chromatic.fm',
            }
        ],
    };
    @Output() moveOutline = new EventEmitter<string>();

    constructor(public firebase: FirebaseService) {}

    ngOnInit() {
        // this.firebase.addMe(this.me);
    }

    moveThisOutline() {
        this.moveOutline.emit(this.whichInfo);
    }
}
