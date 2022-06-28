import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyAccessFormComponent } from './early-access-form.component';

describe('EarlyAccessFormComponent', () => {
  let component: EarlyAccessFormComponent;
  let fixture: ComponentFixture<EarlyAccessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyAccessFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyAccessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
