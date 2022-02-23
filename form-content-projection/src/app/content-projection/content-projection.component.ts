import { Component, OnInit } from '@angular/core';
import { FaInputComponent } from '../fa-input/fa-input.component'

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {
  onNewValue(val: any) {
    console.log(val);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
