import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dropdownMenuindex = 1;
  dropdownMenuShow:boolean = false;

  dropdownMenu(id:any){
    console.log(id);
    this.dropdownMenuindex = id
    if(this.dropdownMenuindex = id){
      this.dropdownMenuShow = !this.dropdownMenuShow
    }
  }
  dropdownMenuFocusOut(id:any){
    console.log(id);
    this.dropdownMenuindex = id
    if(this.dropdownMenuindex = id){
      this.dropdownMenuShow = !this.dropdownMenuShow
    }
  }
}
