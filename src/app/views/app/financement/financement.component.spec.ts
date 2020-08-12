import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancementComponent } from './financement.component';

describe('FinancementComponent', () => {
  let component: FinancementComponent;
  let fixture: ComponentFixture<FinancementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
