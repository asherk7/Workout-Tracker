import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WShowDeleteComponent } from './w-show-delete.component';

describe('WShowDeleteComponent', () => {
  let component: WShowDeleteComponent;
  let fixture: ComponentFixture<WShowDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WShowDeleteComponent]
    });
    fixture = TestBed.createComponent(WShowDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
