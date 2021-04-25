import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Word } from './word';
import data from './data.json';

@Component({
  selector: 'app-word-a-day',
  templateUrl: './word-a-day.component.html',
  styleUrls: ['./word-a-day.component.css'],
})
export class WordADayComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  constructor( ) {}

  todaysWord: Word;
  todaysDate: Date = new Date();
  words: any = (data as any).default;
  allWords: Word[];
  audio : string

  ngOnInit(): void {
    this.initWords();
    this.todaysWord = this.getTodaysWord();
    this.audio = 'https://wordtospeech.azurewebsites.net/api/TextToSpeech' + '?word=' + this.todaysWord.word
  }

  initWords(): void {
    this.words = data;
    this.allWords = this.words;
    this.todaysWord = this.getTodaysWord();
  }

  getTodaysWord(): Word {
    let today = new Date();
    //let dateString = '2021-12-31T00:00:00'
    //let today = new Date(dateString);
    let dayNum = this.daysIntoYear(today);
    return this.allWords[dayNum - 1];
  }


  daysIntoYear(date): number {
    return (
      (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
        Date.UTC(date.getFullYear(), 0, 0)) /
      24 /
      60 /
      60 /
      1000
    );
  }
}
