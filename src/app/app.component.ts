import { Component, OnInit } from '@angular/core';
declare var Waypoint: any;

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    
    AOS.init();
  }
}