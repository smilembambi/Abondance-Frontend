import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotPasseForgetComponent } from './mot-passe-forget.component';

describe('MotPasseForgetComponent', () => {
  let component: MotPasseForgetComponent;
  let fixture: ComponentFixture<MotPasseForgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotPasseForgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotPasseForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
