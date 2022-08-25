import { Component, Input, OnInit } from '@angular/core';

@Component({
  //   selector: 'pm-product-detail', //this won't be needed because it is not nestable, but routed instead
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input()
  id!: number;

  pageTitle: string = 'Product Detail';

  ngOnInit(): void {
    //Retrieve 'id' from the url and assign it to this.id
  }
}
