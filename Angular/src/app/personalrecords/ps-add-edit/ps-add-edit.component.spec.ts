import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsAddEditComponent } from './ps-add-edit.component';

describe('PsAddEditComponent', () => {
  let component: PsAddEditComponent;
  let fixture: ComponentFixture<PsAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsAddEditComponent]
    });
    fixture = TestBed.createComponent(PsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
