import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { PlayerComponent } from './player/player.component';
import { MessagesComponent } from './messages/messages.component';
// import { PlayService } from './play.service';


@NgModule({
  declarations: [
    AppComponent,
    // PlayerComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
