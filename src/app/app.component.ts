import { Component, OnInit } from '@angular/core';
import { SettingsService } from './settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'word-a-day';
  todaysDate : Date = new Date();
  quizMode : boolean;
  constructor(private settingsService: SettingsService ) {}

  ngOnInit(): void {
    this.quizMode = this.settingsService.getQuizMode();
    console.log(this.quizMode);

  }

  quizModeClick(ev: any)
  {
    console.log ( 'quizModeclick');
    console.log(ev);
    this.quizMode = ev.target.checked;


    console.log(this.quizMode);
    this.settingsService.setQuizMode(this.quizMode);




  window.location.reload();
  }

}
