import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTabComponent } from './animated-tab.component';

describe('AnimatedTabComponent', () => {
  let component: AnimatedTabComponent;
  let fixture: ComponentFixture<AnimatedTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
