import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WordADayComponent } from './word-a-day.component';

describe('WordADayComponent', () => {
  let component: WordADayComponent;
  let fixture: ComponentFixture<WordADayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WordADayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordADayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
