import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NameBoxComponent } from './name-box/name-box.component';
import { AboutBoxComponent } from './about-box/about-box.component';
import { SkillsBoxComponent } from './skills-box/skills-box.component';
import { ExperienceBoxComponent } from './experience-box/experience-box.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { DeskComponent } from './desk/desk.component';
import { PaperComponent } from './paper/paper.component';

@NgModule({
  declarations: [
    AppComponent,
    NameBoxComponent,
    AboutBoxComponent,
    SkillsBoxComponent,
    ExperienceBoxComponent,
    StickyNoteComponent,
    DeskComponent,
    PaperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
