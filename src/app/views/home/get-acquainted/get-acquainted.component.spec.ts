import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAcquaintedComponent } from './get-acquainted.component';

describe('GetAcquaintedComponent', () => {
  let component: GetAcquaintedComponent;
  let fixture: ComponentFixture<GetAcquaintedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAcquaintedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAcquaintedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
