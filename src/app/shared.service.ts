import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private randomWordClickEventSubject = new Subject<any>();
  private todayWordClickEventSubject = new Subject<any>();
  private prevWordClickEventSubject = new Subject<any>();
  private nextWordClickEventSubject = new Subject<any>();

  sendRandomWordClickEvent() {
    this.randomWordClickEventSubject.next();
  }

  getRandomWordClickEvent(): Observable<any>{
    return this.randomWordClickEventSubject.asObservable();
  }

  sendTodayWordClickEvent() {
    this.todayWordClickEventSubject.next();
  }

  getTodayWordClickEvent(): Observable<any>{
    return this.todayWordClickEventSubject.asObservable();
  }

  sendPrevWordClickEvent() {
    this.prevWordClickEventSubject.next();
  }

  getPrevWordClickEvent(): Observable<any>{
    return this.prevWordClickEventSubject.asObservable();
  }

  sendNextWordClickEvent() {
    this.nextWordClickEventSubject.next();
  }

  getNextWordClickEvent(): Observable<any>{
    return this.nextWordClickEventSubject.asObservable();
  }
}
