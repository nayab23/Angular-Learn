import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-animated-tab',
  templateUrl: './sample-animated-tab.component.html',
  styleUrls: ['./sample-animated-tab.component.css']
})
export class SampleAnimatedTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showTab = 1;
  tabToggle(index){
    this.showTab =index;
  }
}
