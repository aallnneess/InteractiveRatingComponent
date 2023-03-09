import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  // the clicked active button
  activeButton!: number;

  // How many buttons should be created
  buttons = Array.from([1,2,3,4,5]);

  constructor(private router: Router) {
  }

// set activeButton with click event
  setActive(number: number) {
    this.activeButton = number;
  }

  submit() {

    // check if user clicks a number
    if (Number.isNaN(this.activeButton) || this.activeButton === undefined) return;

    // set new route to show final component
    this.router.navigateByUrl('thanksyou/' + (this.activeButton + 1));
  }

}
