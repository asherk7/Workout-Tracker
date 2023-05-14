import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalrecordsComponent } from './personalrecords.component';

describe('PersonalrecordsComponent', () => {
  let component: PersonalrecordsComponent;
  let fixture: ComponentFixture<PersonalrecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalrecordsComponent]
    });
    fixture = TestBed.createComponent(PersonalrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
