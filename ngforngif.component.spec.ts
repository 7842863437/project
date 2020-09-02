import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforngifComponent } from './ngforngif.component';

describe('NgforngifComponent', () => {
  let component: NgforngifComponent;
  let fixture: ComponentFixture<NgforngifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforngifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
