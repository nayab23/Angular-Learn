import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dropdownclick',
  templateUrl: './dropdownclick.component.html',
  styleUrls: ['./dropdownclick.component.css']
})
export class DropdownclickComponent implements OnInit {


  ngOnInit(): void {
  }
  dropdownMenuindex = 1;
  dropdownMenuShow:boolean = false;



  // @ViewChild('toggleButton') toggleButton: ElementRef;
  // @ViewChild('menu') menu: ElementRef;

  constructor(private renderer: Renderer2) {
    /**
     * This events get called by all clicks on the page
     */
    // this.renderer.listen('window', 'click',(e:Event)=>{
         /**
          * Only run when toggleButton is not clicked
          * If we don't check this, all clicks (even on the toggle button) gets into this
          * section which in the result we might never see the menu open!
          * And the menu itself is checked here, and it's where we check just outside of
          * the menu and button the condition abbove must close the menu
          */
        // if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
        //     this.isMenuOpen=false;
        // }
    // });
  }

  // isMenuOpen = false;
  // number = 0 ;

  dropdownMenu(id:any){
    console.log(id);
    this.dropdownMenuindex = id
    if(this.dropdownMenuindex = id){
      this.dropdownMenuShow = true
    }
    console.log('start')
  }
  stop(e){
    console.log('stop')
    e.preventDefault();
  }
  dropdownMenuFocusOut(id:any){
    console.log(id);
    this.dropdownMenuindex = id
    if(this.dropdownMenuindex = id){
      this.dropdownMenuShow = false
    }
    console.log('no')
  }
  // toggleMenu() {
  //   this.isMenuOpen= !this.isMenuOpen
  // }
}
