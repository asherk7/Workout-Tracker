import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsShowDeleteComponent } from './ps-show-delete.component';

describe('PsShowDeleteComponent', () => {
  let component: PsShowDeleteComponent;
  let fixture: ComponentFixture<PsShowDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsShowDeleteComponent]
    });
    fixture = TestBed.createComponent(PsShowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
