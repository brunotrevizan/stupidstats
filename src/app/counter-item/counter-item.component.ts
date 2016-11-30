import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-counter-item',
  templateUrl: './counter-item.component.html',
  styleUrls: ['./counter-item.component.css']
})
export class CounterItemComponent implements OnInit {

  @Input() idPanel: string;
  @Input() isDecimal : boolean = true;
  
  @Input() name: string;
  @Input() description: string;
  @Input() valueByMilissecond;
  @Input() counter;
  @Input() valueMilissecond;


  constructor() { }

  ngOnInit() {
    this.valueByMilissecond = +this.valueByMilissecond;
    this.counter = +this.counter;
    this.valueMilissecond = +this.valueMilissecond;
    let timer = Observable.timer(2000, this.valueMilissecond);
		var subscription = timer.subscribe(t => this.counter = this.counter + this.valueByMilissecond);
  }

}
