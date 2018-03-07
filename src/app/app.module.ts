import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { NameBoxComponent } from './name-box/name-box.component';
import { AboutBoxComponent } from './about-box/about-box.component';
import { SkillsBoxComponent } from './skills-box/skills-box.component';
import { ExperienceBoxComponent } from './experience-box/experience-box.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { DeskComponent } from './desk/desk.component';
import { PaperComponent } from './paper/paper.component';
import { PenComponent } from './pen/pen.component';
import { StickyNoteBlockComponent } from './sticky-note-block/sticky-note-block.component';
import { NameplateComponent } from './nameplate/nameplate.component';
import { ModalComponent } from './modal/modal.component';

import { MoveElementService } from './move-element.service';
import { NoteService } from './note-service.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDZ-IEb0rsLH8p_C3uxpxRXrogd7bvv36w',
  authDomain: 'alanbcolecodewebsite.firebaseapp.com',
  databaseURL: 'https://alanbcolecodewebsite.firebaseio.com',
  projectId: 'alanbcolecodewebsite',
  storageBucket: 'alanbcolecodewebsite.appspot.com',
  messagingSenderId: '1093057421499'
};

@NgModule({
  declarations: [
    AppComponent,
    NameBoxComponent,
    AboutBoxComponent,
    SkillsBoxComponent,
    ExperienceBoxComponent,
    StickyNoteComponent,
    DeskComponent,
    PaperComponent,
    PenComponent,
    StickyNoteBlockComponent,
    NameplateComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    MoveElementService,
    NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
