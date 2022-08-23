import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = `Product
    List`;
  selectedRating: string = ``;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2021',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'assets/images/hammer.png',
    },
  ];
  filteredProducts: IProduct[] = [];

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(`[[[debug]]]@ listFilter setter [${this._listFilter}]`);
    this.filteredProducts = this.performFilter(value);
  }

  ngOnInit(): void {
    this.listFilter = 'cart';
    console.log('[[[debug]]] @ ngOnInit');
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
