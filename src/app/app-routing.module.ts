import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordADayComponent } from './word-a-day/word-a-day.component';


const routes: Routes = [];
@NgModule({
  imports: [
      RouterModule.forRoot([
    { path: '**', component: WordADayComponent }
], { relativeLinkResolution: 'legacy' })
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
