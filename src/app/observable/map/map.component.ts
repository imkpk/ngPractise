import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  // subscription
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;
  // messages
  msg1;
  msg2;
  msg3;

  constructor(private _du: DesignUtilityService) {}

  ngOnInit(): void {
    // Ex-01
    const brodCasting = interval(1000);

    this.sub1 = brodCasting
      .pipe(
        // map method
        map((data) => 'Map data ' + data)
      )
      .subscribe((res) => {
        // console.log(res);
        this.msg1 = res;
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

    // Ex-02
    this.sub2 = brodCasting
      .pipe(
        // second map function
        map((data) => data * 3)
      )
      .subscribe((res) => {
        this.msg2 = res;
      });
    // Ex-03

    const members = from([
      { id: 1, name: 'Anup' },
      { id: 2, name: 'Pankaj' },
      { id: 3, name: 'Tanmay' },
      { id: 4, name: 'Ashish' },
      { id: 5, name: 'Husnain' },
      { id: 6, name: 'Rajesh' },
      { id: 7, name: 'Vivek' },
      { id: 8, name: 'Janet' },
    ]);

    this.sub3 = members
      .pipe(
        // object map
        map((data) => data.name)
      )
      .subscribe((res) => {
        // this.msg3 = res;
        // console.log(res);

        this._du.print(res, 'elContainer');
      });
  }
}
