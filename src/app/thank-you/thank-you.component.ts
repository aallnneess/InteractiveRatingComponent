import {Component, OnInit} from '@angular/core';
import {finalize, Observable, take, tap} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  activeButton!: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    // We get the button number from the ActivatedRoute
    // We only want one take in this example, so we close the subscription after one take
    this.route.paramMap.pipe(
      tap((params: ParamMap) => {
        this.activeButton = parseInt(params.get('button')!);
      }),
      take(1)
    ).subscribe();

  }


}
