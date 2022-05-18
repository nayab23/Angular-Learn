import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperimageComponent } from './cropperimage.component';

describe('CropperimageComponent', () => {
  let component: CropperimageComponent;
  let fixture: ComponentFixture<CropperimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropperimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
