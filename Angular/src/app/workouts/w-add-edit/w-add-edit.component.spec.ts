import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WAddEditComponent } from './w-add-edit.component';

describe('WAddEditComponent', () => {
  let component: WAddEditComponent;
  let fixture: ComponentFixture<WAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WAddEditComponent]
    });
    fixture = TestBed.createComponent(WAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
