import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}

  public promiseWell;

  dellAvil() {
    return false;
  }
  hpAvil() {
    return true;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((reslove, reject) => {
      // resloved('resloved promise');
      if (this.dellAvil()) {
        setTimeout(() => {
          reslove('Dell is purchased');
        }, 3000);
      } else if (this.hpAvil()) {
        setTimeout(() => {
          reslove('HP is purchased');
        }, 3000);
      } else {
        reject('laptop is not avilable');
      }
    });
    buyLaptop
      .then((resloved) => {
        // console.log('then resloved => ', resloved);
        this.promiseWell = resloved;
      })
      .catch((err) => {
        // console.log('catch code =>', err);
        this.promiseWell = err;
      });
  }
}
