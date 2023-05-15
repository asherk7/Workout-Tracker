import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MShowDeleteComponent } from './m-show-delete.component';

describe('MShowDeleteComponent', () => {
  let component: MShowDeleteComponent;
  let fixture: ComponentFixture<MShowDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MShowDeleteComponent]
    });
    fixture = TestBed.createComponent(MShowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
