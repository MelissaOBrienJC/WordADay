import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Word } from './word';
import data from './data.json';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-word-a-day',
  templateUrl: './word-a-day.component.html',
  styleUrls: ['./word-a-day.component.css'],
})
export class WordADayComponent implements OnInit {




  constructor(private settingsService: SettingsService ) {}

  todaysWord: Word;
  todaysDate: Date = new Date();
  words: any = (data as any).default;
  allWords: Word[];
  audio : string
  quizMode: boolean;


  ngOnInit(): void {

    this.quizMode = this.settingsService.getQuizMode();
    console.log(this.quizMode);
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

  getRandomWord(): void {


    var element = document.getElementById('showDefButton') as HTMLElement;
    if ( element)
    {


    var expanded = element.getAttribute('aria-expanded');
    if ( expanded== "true")
    {
      element.click();   // hide definition
    }
  }
    let dayNum = this.getRandomInt(1,365)
    this.todaysWord = this.allWords[dayNum - 1];
    this.audio = 'https://wordtospeech.azurewebsites.net/api/TextToSpeech' + '?word=' + this.todaysWord.word
  }

  getRandomInt(min, max) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
