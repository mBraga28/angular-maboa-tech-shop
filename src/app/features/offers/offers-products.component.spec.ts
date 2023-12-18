import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersProductsComponent } from './offers-products.component';

describe('offers-productsComponent', () => {
  let component: OffersProductsComponent;
  let fixture: ComponentFixture<OffersProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffersProductsComponent]
    });
    fixture = TestBed.createComponent(OffersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
