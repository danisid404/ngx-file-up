import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFileUpComponent } from './ngx-file-up.component';

describe('NgxFileUpComponent', () => {
  let component: NgxFileUpComponent;
  let fixture: ComponentFixture<NgxFileUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFileUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFileUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
