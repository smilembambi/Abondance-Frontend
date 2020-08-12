import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusdateComponent } from './plusdate.component';

describe('PlusdateComponent', () => {
  let component: PlusdateComponent;
  let fixture: ComponentFixture<PlusdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
