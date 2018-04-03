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
    me: Me;
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
            case 'experience':
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

    // {
    //     name: 'Alan Cole',
    //     aboutMe: {
    //         portrait: '/assets/images/me.jpg',
    //         about: [
    //             'I am a junior software developer looking for opportunities to contribute with the skills I have as well as my curiosity and ability to learn new things. I am a great team player with an attention to detail who loves to collaborate and share what I know and has the initiative to help projects move forward.',
    //             'In short, I am a software developer who believes that developing software is basically a learning and collaborative process, which is one of the reasons I find it so interesting. I believe I would be a great addition to your team and company as well as a healthy addition to its culture with my friendly, self-starting, and down to earth attitude.',
    //         ],
    //     },
    //     skills: {
    //         skillsList: [
    //             'Full-Stack Web Dev: JavaScript, Typescript, Angular4+, Node.js, Express.js, MongoDB, Bootstrap, Material Design, HTML5, CSS3',
    //             'Mobile Development: iOS/swift, Progressive Web Apps',
    //             'Version Control: Git, Github',
    //             'Object Oriented Programing (Typescript, Swift)',
    //             'Deployment and shell scripting',
    //             'Agile development methodology'
    //         ],
    //         socialLinks: [
    //             {
    //                 title: 'Github',
    //                 link: 'https://www.github.com/AlanBCole',
    //             },
    //             {
    //                 title: 'LinkedIn',
    //                 link: 'https://www.linkedin.com/in/alan-cole-4769b0133/'
    //             }
    //         ],
    //     },
    //     experience: [
    //         {
    //             title: 'QA Developer, Junior iOS Developer',
    //             description: [
    //                 'Wrote unit tests in Swift using XCTest framework',
    //                 'Designed testing plans',
    //                 'Wrote and maintained app features in Swift',
    //                 'Worked in an Agile team'
    //             ],
    //             picture: '/assets/images/Chromatic-Landing-v4.png',
    //         }
    //     ],
    // };
    @Output() moveOutline = new EventEmitter<string>();

    constructor(public firebase: FirebaseService) {}

    ngOnInit() {
        this.firebase.getMe()
            .subscribe((res) => {
                this.me = res;
                console.log(res);
            });
    }

    moveThisOutline() {
        this.moveOutline.emit(this.whichInfo);
    }
}
