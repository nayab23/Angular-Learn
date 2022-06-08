import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleAnimatedTabComponent } from './sample-animated-tab.component';

describe('SampleAnimatedTabComponent', () => {
  let component: SampleAnimatedTabComponent;
  let fixture: ComponentFixture<SampleAnimatedTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleAnimatedTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleAnimatedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
