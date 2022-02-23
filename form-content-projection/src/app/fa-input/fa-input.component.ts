import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit {
  @Input() icon: string= "";
  @Output() value = new EventEmitter<string>();
  inputFocus = false;

  get classes() {
    const cssClasses: any = {
      fa: true
    };
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

  @HostBinding('class.focus')
  get focus() {
    console.log(this.inputFocus);
    return this.inputFocus;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
