import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor(private _duService: DesignUtilityService) {}

  @ViewChild('addBtn') addBtn: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      let countVal = 'video' + count++;
      console.log(countVal);

      this._duService.print(countVal, 'elContainer');
      this._duService.print(countVal, 'elContainer2');
    });
  }
}
