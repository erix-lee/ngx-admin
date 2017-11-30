import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxuiComponent } from './ngxui.component';

describe('NgxuiComponent', () => {
  let component: NgxuiComponent;
  let fixture: ComponentFixture<NgxuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
