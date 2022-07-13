import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourHubSectionComponent } from './your-hub-section.component';

describe('YourHubSectionComponent', () => {
  let component: YourHubSectionComponent;
  let fixture: ComponentFixture<YourHubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourHubSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourHubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
