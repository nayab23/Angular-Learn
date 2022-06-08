import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-tab',
  templateUrl: './animated-tab.component.html',
  styleUrls: ['./animated-tab.component.css']
})
export class AnimatedTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showTab = 1;
  tabToggle(index){
    this.showTab =index;
  }

  AnimatedTabIndex = 1;
  AnimatedTabShow:boolean = false;
  AnimatedTab(id){
    console.log(id);
    this.AnimatedTabIndex = id
    if(this.AnimatedTabIndex = id){
      this.AnimatedTabShow = !this.AnimatedTabShow
    }
  }
}
