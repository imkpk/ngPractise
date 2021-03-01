import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  users = [
    { name: 'Anup', skill: 'Angular' },
    { name: 'Shekhar', skill: 'Html, Css' },
    { name: 'Sharma', skill: 'JavaScript' },
    { name: 'Uxtrendz', skill: 'TypeScript' },
  ];

  sourceSub: Subscription;
  constructor() {}

  ngOnInit(): void {
    const source = interval(2000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      // console.log('Source toarray-->', res);
      // if (res >= 8) {
      //   this.sourceSub.unsubscribe();
      // }
    });

    //Ex -02
    const source2 = from(this.users);

    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    //Ex -03
    const source3 = of('anup', 'Shakear', 'Sharma', 'Uxtrends');

    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
