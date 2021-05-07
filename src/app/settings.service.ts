import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private quizMode: boolean;
  private QUIZMODE_STORAGE_KEY: string = "wordaday-quiz-mode";

    constructor(){
      this.quizMode = false;
    }

    setQuizMode(val: boolean){
      this.quizMode = val;
      localStorage.setItem(this.QUIZMODE_STORAGE_KEY, val.toString() );
    }

    getQuizMode():boolean{
      var strStorage = localStorage.getItem(this.QUIZMODE_STORAGE_KEY);
      if  (strStorage)
      {
          this.quizMode = (strStorage == "true");
      }
      return this.quizMode;
    }
}
