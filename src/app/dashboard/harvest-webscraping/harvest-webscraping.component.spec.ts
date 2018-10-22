import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestWebscrapingComponent } from './harvest-webscraping.component';

describe('HarvestWebscrapingComponent', () => {
  let component: HarvestWebscrapingComponent;
  let fixture: ComponentFixture<HarvestWebscrapingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestWebscrapingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestWebscrapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
