import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestApiComponent } from './harvest-api.component';

describe('HarvestApiComponent', () => {
  let component: HarvestApiComponent;
  let fixture: ComponentFixture<HarvestApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarvestApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarvestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
