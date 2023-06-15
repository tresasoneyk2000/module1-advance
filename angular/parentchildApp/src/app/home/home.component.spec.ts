import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have parentData input set correctly', () => {
    const testData = '';
    component.parentData = testData;
    expect(component.parentData).toEqual(testData);
  });

  it('should have parentValue input set correctly', () => {
    const testValue = NaN;
    component.parentValue = testValue;
    expect(component.parentValue).toEqual(testValue);
  });
});
