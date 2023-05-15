import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SShowComponent } from './s-show.component';

describe('SShowComponent', () => {
  let component: SShowComponent;
  let fixture: ComponentFixture<SShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SShowComponent]
    });
    fixture = TestBed.createComponent(SShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
