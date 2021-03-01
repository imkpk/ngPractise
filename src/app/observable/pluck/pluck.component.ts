import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  constructor() {}

  users = [
    {
      name: 'Anup',
      skills: 'Angular',
      job: {
        title: 'Fronend Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'Uxtrendz',
      skills: 'Html, Css',
      job: {
        title: 'Html Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'john',
      skills: 'Vuejs',
      job: {
        title: 'UI Developer',
        exp: '10 Years',
      },
    },
    {
      name: 'Alex',
      skills: 'Javascript',
      job: {
        title: 'Javascript Developer',
        exp: '10 Years',
      },
    },
  ];

  data;
  data2;
  data3;

  ngOnInit(): void {
    // EX-01 pluck with nested operator
    from(this.users)
      .pipe(
        // map insted of pluck
        // map((data) => data.name)
        // pluck insted map for name
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        // console.log(res);
        this.data = res;
      });

    // EX-02
    from(this.users)
      .pipe(
        // pluck with nested object job
        pluck('job', 'title'),
        toArray()
      )
      .subscribe((res) => {
        this.data2 = res;
      });
  }
}
