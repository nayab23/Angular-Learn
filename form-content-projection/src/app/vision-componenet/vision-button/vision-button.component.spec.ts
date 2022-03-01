import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionButtonComponent } from './vision-button.component';

describe('VisionButtonComponent', () => {
  let component: VisionButtonComponent;
  let fixture: ComponentFixture<VisionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
