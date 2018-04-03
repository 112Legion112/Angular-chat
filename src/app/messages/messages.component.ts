import { Component, OnInit } from '@angular/core';
import { Play } from '../player';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  player = PLAYERS;

  selectedPlay: Play;

  itemCount: number;
  btnText: string = 'Add an text';
  goalText: string = 'My first messege';
  goals = [];

  // count = 0;
  // increase(): void {
  //   this.count++;
  // }

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

  onSelect(play: Play): void {
    this.selectedPlay = play;
  }
}
