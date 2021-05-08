import { Component, OnInit } from '@angular/core';
import { Subject, Subscription} from 'rxjs';
import { Word } from './word';
import data from './data.json';
import { SettingsService } from '../settings.service';
import { SharedService } from './../shared.service';


@Component({
  selector: 'app-word-a-day',
  templateUrl: './word-a-day.component.html',
  styleUrls: ['./word-a-day.component.css'],
})
export class WordADayComponent implements OnInit {
  randomWordClickEventsubscription:Subscription;
  todayWordClickEventsubscription:Subscription;
  prevWordClickEventsubscription:Subscription;
  nextWordClickEventsubscription:Subscription;

  constructor(private settingsService: SettingsService,  private sharedService:SharedService ) {

    this. randomWordClickEventsubscription = this.sharedService.getRandomWordClickEvent().subscribe(()=>{
      this.getRandomWord();
    })

    this. todayWordClickEventsubscription = this.sharedService.getTodayWordClickEvent().subscribe(()=>{
      this.getTodaysWord();
    })

    this. prevWordClickEventsubscription = this.sharedService.getPrevWordClickEvent().subscribe(()=>{
       this.getPrevWord();
    })

    this.nextWordClickEventsubscription = this.sharedService.getNextWordClickEvent().subscribe(()=>{
      this.getNextvWord();
   })

  }

  todaysWord: Word;
  todaysDate: Date = new Date();
  dayNum: number;
  words: any = (data as any).default;
  allWords: Word[];
  audio : string
  quizMode: boolean;


  ngOnInit(): void {
    this.quizMode = this.settingsService.getQuizMode();
    this.initWords();
    this.getTodaysWord();
  }

  initWords(): void {
    this.words = data;
    this.allWords = this.words;
  }

  getTodaysWord(): void {
    this.todaysWord = this.getTodaysWordFromData();
    this.getAudio();
  }

  getPrevWord(): void {

    if ( this.dayNum > 2)
    {
      this.dayNum = this.dayNum  - 1;
      this.todaysWord = this.getWordFromData(this.dayNum);
      this.getAudio();
    }
  }


  getNextvWord(): void {


    if ( this.dayNum <  365)
    {
      this.dayNum = this.dayNum  + 1;
      this.todaysWord = this.getWordFromData(this.dayNum);
      this.getAudio();
    }
  }


  getAudio()
  {
      this.audio = 'https://wordtospeech.azurewebsites.net/api/TextToSpeech' + '?word=' + this.todaysWord.word
  }

  getWordFromData(daynum: number): Word {

      return this.allWords[daynum - 1];
  }

  getTodaysWordFromData(): Word {
    let today = new Date();
    this.dayNum = this.daysIntoYear(today);
    return  this.getWordFromData(this.dayNum);
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
    let daynum = this.getRandomInt(1,365);
    this.todaysWord = this.getWordFromData(daynum);
    this.getAudio();
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
