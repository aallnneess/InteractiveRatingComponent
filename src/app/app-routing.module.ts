import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RatingComponent} from "./rating/rating.component";
import {ThankYouComponent} from "./thank-you/thank-you.component";

const routes: Routes = [
  {path: '', component: RatingComponent},
  {path: 'thanksyou/:button', component: ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
