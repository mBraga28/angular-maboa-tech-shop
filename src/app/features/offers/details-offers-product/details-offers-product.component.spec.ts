import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOffersProductComponent } from './details-offers-product.component';

describe('DetailsOffersProductComponent', () => {
  let component: DetailsOffersProductComponent;
  let fixture: ComponentFixture<DetailsOffersProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsOffersProductComponent]
    });
    fixture = TestBed.createComponent(DetailsOffersProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
