import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReviewComponent } from './details-review.component';

describe('DetailsReviewComponent', () => {
  let component: DetailsReviewComponent;
  let fixture: ComponentFixture<DetailsReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsReviewComponent]
    });
    fixture = TestBed.createComponent(DetailsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
