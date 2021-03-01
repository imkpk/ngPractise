import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit {
  obsMsg;
  vidoSubscription: Subscription;
  constructor(private _duService: DesignUtilityService) {}

  ngOnInit(): void {
    // const broadCastVideos = interval(2000);
    // timer(delay,interval)
    const broadCastVideos = timer(5000, 1000);
    this.vidoSubscription = broadCastVideos.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'video' + res;
      this._duService.print(this.obsMsg, 'elContainer');
      this._duService.print(this.obsMsg, 'elContainer1');
      this._duService.print(this.obsMsg, 'elContainer2');
      if (res >= 5) {
        this.vidoSubscription.unsubscribe();
      }
    });
  }
}
