import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../shared/services/product.service';
import { IProduct } from './product';

@Component({
  // selector: 'pm-products', selector removed because it won't be embedded but instead handled by routing
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = `Product
    List`;
  selectedRating: string = ``;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(`[[[debug]]]@ listFilter setter [${this._listFilter}]`);
    this.filteredProducts = this.performFilter(value);
  }

  // private _productService;
  // constructor(productService: ProductService) {
  //   this._productService = productService;
  // }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (r) => {
        this.products = r;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });

    console.log('[[[debug]]] @ ngOnInit');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  shouldDisplayProducts(): boolean {
    return this.products.length > 0;
  }

  showImage_Event(): void {
    this.showImage = !this.showImage;
  }

  performFilter(value: string): IProduct[] {
    return this.products.filter((r: IProduct) => {
      return (
        r.productCode.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        r.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
    });
  }

  // interesting... at the console, you'll get this LOG first
  // then, you'll get the LOG for the emitter... so basically:
  // > notification received! [clickeado!!!]
  // > clickeado!!!
  onNotify(myReceivedEvent: string): void {
    this.selectedRating = myReceivedEvent;
    console.log(`notification received! [${myReceivedEvent}]`);
  }
}
