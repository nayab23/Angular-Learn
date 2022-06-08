import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownclickComponent } from './dropdownclick.component';

describe('DropdownclickComponent', () => {
  let component: DropdownclickComponent;
  let fixture: ComponentFixture<DropdownclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
