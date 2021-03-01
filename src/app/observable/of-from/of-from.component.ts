import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent implements OnInit {
  obsMsg;

  constructor(private _duService: DesignUtilityService) {}

  ngOnInit(): void {
    // OF
    const obs1 = of('Vasantha', 'Justin', 'Zoie');
    obs1.subscribe((res) => {
      console.log(res);
      this._duService.print(res, 'elContainer');
    });
    const obs2 = of({ a: 'Vasantha', b: 'Justin', c: 'Zoie' });
    obs2.subscribe((res) => {
      // this._duService.print(res, 'elContainer');
      this.obsMsg = res;
      console.log('obsMsg', this.obsMsg);
    });

    //From-Array
    const obs3 = from(['Vasantha', 'Justin', 'Zoie', 'prathibha']);
    obs3.subscribe((res) => {
      console.log('obs3=>', res);
      this._duService.print(res, 'elContainer3');
    });

    //From-Promise
    const prom = new Promise((reslove) => {
      setTimeout(() => {
        reslove('Promise Resloved ');
      }, 3000);
    });
    const obs4 = from(prom);
    obs4.subscribe((res) => {
      console.log('from Promise=>', res);
      this._duService.print(res, 'elContainer4');
    });

    // from-String

    const obs5 = from(' Pratibha Kumar ');
    obs5.subscribe((res) => {
      console.log('from string=>', res);
      this._duService.print(res, 'elContainer5');
    });
  }
}
