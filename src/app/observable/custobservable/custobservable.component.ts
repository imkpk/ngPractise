import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custobservable',
  templateUrl: './custobservable.component.html',
  styleUrls: ['./custobservable.component.css'],
})
export class CustobservableComponent implements OnInit, OnDestroy {
  techStatus;
  techStatus2;
  subs2: Subscription;
  names;
  nameStatus;
  constructor(private _desiUtility: DesignUtilityService) {}

  ngOnInit(): void {
    //Ex-01 (manual)
    const cusObsl = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Angular'); //we emit our data
      }, 1000);
      setTimeout(() => {
        observer.next('TypeScript'); //we emit our data
      }, 2000);
      setTimeout(() => {
        observer.next('Node Js'); //we emit our data
        observer.complete(); //use it to complete observer
      }, 3000);
      setTimeout(() => {
        observer.next('React.Js'); //we emit our data
      }, 4000);
      setTimeout(() => {
        observer.next('Bootstrap'); //we emit our data
        // observer.error('limit exceded'); //we can emit error
      }, 5000);
      setTimeout(() => {
        observer.next('ServerLess'); //we emit our data
        //observer.complete(); //use it to complete
      }, 6000);
    });
    cusObsl.subscribe(
      (res) => {
        // console.log(res);
        this._desiUtility.print(res, 'elContainer');
      },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      }
    );

    // subscribe(data,error,completion)

    // E-02 (Custom INtervals)
    const arr2 = ['Angular', 'Javascript', 'HTML', 'CSS', 'Typescript'];

    const cusObs2 = new Observable((obsr) => {
      let count = 0;
      setInterval(() => {
        obsr.next(arr2[count]);

        if (count >= 2) {
          obsr.error('error emit');
        }

        if (count >= 5) {
          obsr.complete();
        }
        count++;
      }, 1000);
    });
    this.subs2 = cusObs2.subscribe(
      (res) => {
        // console.log(res);
        this._desiUtility.print(res, 'elContainer2');
      },
      (err) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      }
    );

    // EX-03 (Random Names)

    const arr3 = [
      'Anup',
      'Shekhar',
      'Sharma',
      'Uxtrendz',
      'John',
      'Alex',
      'Robert',
    ];
    const cusObs3 = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count]);
        if (count >= 2) {
          observer.error('Error Emit');
        }
        if (count >= 6) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    cusObs3.subscribe(
      (res) => {
        console.log(res);
        this.names = res;
      },
      (err) => {
        this.nameStatus = 'error';
      },
      () => {
        this.nameStatus = 'completed';
      }
    );
  }

  ngOnDestroy() {
    this.subs2.unsubscribe();
  }
}
