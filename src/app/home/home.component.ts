import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  words: string[];
  constructor() { }

  ngOnInit(): void {
    this.words = this.getRandomString(1000);
  }

  private getRandomString = length => {
    const words = [];
    for ( let j = 1; j < length; j++ ) {
      let result = '';
      if (j % 5 === 2){
        result = 'beep';
        words.push(result);
      }
      if (j % 20 === 0){
        result = 'boop';
        words.push(result);
      }
      if (j % 100 === 0){
        result = 'beep boop';
        words.push(result);
      }
    }
    return words;
  }
}
