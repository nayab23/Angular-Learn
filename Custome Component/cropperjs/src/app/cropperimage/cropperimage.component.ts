import { Component, OnInit, ViewChild } from '@angular/core';
import { CropperComponent } from '../cropper/cropper.component';

@Component({
  selector: 'app-cropperimage',
  templateUrl: './cropperimage.component.html',
  styleUrls: ['./cropperimage.component.css']
})
export class CropperimageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(CropperComponent) cropp;
  ToggleCroppie: boolean = false;

  src: any;
  modalId: string = 'modal';

  toggleCroppie() {
    this.ToggleCroppie = !this.ToggleCroppie;
  }


  showCroppResult($event) {
    if (!$event) return;
    this.createImageFromBlob($event.blob);
  }

  private createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.src = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

}
