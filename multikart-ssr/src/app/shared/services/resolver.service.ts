import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Product } from '../classes/product';
import { ProductService } from './product.service';

@Injectable({
	providedIn: 'root'
})
export class Resolver implements Resolve<Product> {
  
  public product: Product = {};

  constructor(
    private router: Router,
    public productService: ProductService
  ) {}

  // Resolver
  async resolve(route: ActivatedRouteSnapshot): Promise<any> {
    // await new Promise(resolve => setTimeout(resolve, 1000));   
    return new Promise((resolve, reject) => {
      this.productService.getProductBySlug(route.params.slug).subscribe(
        (data) => {
          if(!data) {
            this.router.navigateByUrl('/pages/404', {skipLocationChange: true});
          }
          this.product = data
          resolve(data);
        },
      )
    })
  }
}
