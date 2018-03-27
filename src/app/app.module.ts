import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { DeskComponent } from './desk/desk.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { OutlineComponent } from './my-info/outline/outline.component';
import { PenComponent } from './pen/pen.component';
import { StickyNoteBlockComponent } from './sticky-note-block/sticky-note-block.component';
import { NameplateComponent } from './nameplate/nameplate.component';
import { ModalComponent } from './modal/modal.component';

import { GetStickyNotesService } from './get-sticky-notes.service';
import { MoveElementService } from './move-element.service';
import { FirebaseService } from './firebase-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StickyNoteComponent,
    DeskComponent,
    MyInfoComponent,
    PenComponent,
    StickyNoteBlockComponent,
    NameplateComponent,
    ModalComponent,
    OutlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MoveElementService,
    FirebaseService,
    GetStickyNotesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
