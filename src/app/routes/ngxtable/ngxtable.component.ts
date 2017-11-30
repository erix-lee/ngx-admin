import { Component, OnInit,ViewEncapsulation } from '@angular/core';

import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-ngxtable',
  encapsulation: ViewEncapsulation.None,
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  templateUrl: './ngxtable.component.html',
  styleUrls: ['./ngxtable.component.scss']
})
export class NgxtableComponent implements OnInit {

  state:string;
  constructor(location: Location) {
    this.state = location.path(true);
  }
 
  setstate(state) {
    this.state = state;
  }

  version: string = "a";


  ngOnInit() {
  }

}
