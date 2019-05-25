import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItButtonComponent } from './get-it-button.component';

describe('GetItButtonComponent', () => {
  let component: GetItButtonComponent;
  let fixture: ComponentFixture<GetItButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetItButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetItButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
