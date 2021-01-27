import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
// import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private products: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) {
  }

  ngOnInit() {
    this.contentfulService.getProducts();
    // const promise = this.contentfulService.getProducts();
    //
    // from(promise).pipe(map(products => products)
    // ).subscribe(products =>  {
    //   console.log('products', products);
    // });
    // this.contentfulService.getProducts()
    //   .then(products => {
    //     console.log('products', products);
    //     this.products = products;
    //   });
  }

}
