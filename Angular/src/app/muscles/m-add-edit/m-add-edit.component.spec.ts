import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAddEditComponent } from './m-add-edit.component';

describe('MAddEditComponent', () => {
  let component: MAddEditComponent;
  let fixture: ComponentFixture<MAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MAddEditComponent]
    });
    fixture = TestBed.createComponent(MAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
