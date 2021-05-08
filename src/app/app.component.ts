import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'word-a-day';
  todaysDate : Date = new Date();
  quizMode : boolean;
  constructor(private settingsService: SettingsService, private sharedService:SharedService ) {}

  ngOnInit(): void {
    this.quizMode = this.settingsService.getQuizMode();
  }

  randomWordClick()
  {
        this.sharedService.sendRandomWordClickEvent();
  }

  todayWordClick()
  {
        this.sharedService.sendTodayWordClickEvent();
  }

  prevWordClick()
  {
        this.sharedService.sendPrevWordClickEvent();
  }

  nextWordClick()
  {
        this.sharedService.sendNextWordClickEvent();
  }

  quizModeClick(ev: any)
  {
    this.quizMode = ev.target.checked;
    this.settingsService.setQuizMode(this.quizMode);
    window.location.reload();
  }

}
