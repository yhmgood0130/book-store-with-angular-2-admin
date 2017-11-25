import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewJerseyComponent } from './add-new-jersey.component';

describe('AddNewJerseyComponent', () => {
  let component: AddNewJerseyComponent;
  let fixture: ComponentFixture<AddNewJerseyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewJerseyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewJerseyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
