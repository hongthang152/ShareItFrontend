import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareItButtonComponent } from './share-it-button.component';

describe('ShareItButtonComponent', () => {
  let component: ShareItButtonComponent;
  let fixture: ComponentFixture<ShareItButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareItButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareItButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
