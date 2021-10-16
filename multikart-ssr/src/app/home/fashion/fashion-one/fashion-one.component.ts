import { Component, OnInit } from '@angular/core';
import { ProductSlider } from '../../../shared/data/slider';
import { Product, Images } from '../../../shared/classes/product';
import { ProductService } from '../../../shared/services/product.service';
import { FetchProductsGQL } from 'src/generated/graphql';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fashion-one',
  templateUrl: './fashion-one.component.html',
  styleUrls: ['./fashion-one.component.scss']
})
export class FashionOneComponent implements OnInit {

  public products: Product[] = [];
  public productCollections: any[] = [];
  ranges = [];
  rangeSize = 4;
  
  constructor(
    public productService: ProductService,
    private readonly fetchProductsGQL: FetchProductsGQL
  ) {
    this.fetchProductsGQL.fetch().subscribe(
      ({ data }) => {
        this.products = [...data.fetchProducts].reverse().map((product) => { 
          const gallery = [product.cover, ...product.gallery]
          const images = gallery.map((image) => {
            return { id: image.id, src: this.generateImgUrl(image.id), alt: "", image_id: image.id} as unknown
          })
          return { ...product, quantity: product.quota, title: product.name, category: product.category.name, images, variants: [] } as unknown
         });
        for(let i = 0; i < data.fetchProducts.length / this.rangeSize; i++) {
          this.ranges.push(i * this.rangeSize);
        }
        console.log({ranges: this.ranges, total: data.fetchProducts.length})
      }
      )
    // this.productService.getProducts.subscribe(response => {
    //   this.products = response.filter(item => item.type == 'fashion');
    //   // Get Product Collection
    //   this.products.filter((item) => {
    //     item.collection.filter((collection) => {
    //       const index = this.productCollections.indexOf(collection);
    //       if (index === -1) this.productCollections.push(collection);
    //     })
    //   })
    // });
  }

  public ProductSliderConfig: any = ProductSlider;

  public sliders = [{
    title: 'Bienvenu sur Ivoire Discount',
    subTitle: 'VOTRE BOUTIQUE DE PROXIMITÉ',
    image: 'assets/images/slider/30.jpg'
  }]

  // Collection banner
  public collections = [{
    image: 'assets/images/collection/fashion/1.jpg',
    save: 'save 50%',
    title: 'men'
  }, {
    image: 'assets/images/collection/fashion/2.jpg',
    save: 'save 50%',
    title: 'women'
  }];

  // Blog
  public blog = [{
    image: 'assets/images/blog/1.jpg',
    date: '25 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/2.jpg',
    date: '26 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/3.jpg',
    date: '27 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/4.jpg',
    date: '28 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }];

  // Logo
  public logo = [{
    image: 'assets/images/logos/1.png',
  }, {
    image: 'assets/images/logos/2.png',
  }, {
    image: 'assets/images/logos/3.png',
  }, {
    image: 'assets/images/logos/4.png',
  }, {
    image: 'assets/images/logos/5.png',
  }, {
    image: 'assets/images/logos/6.png',
  }, {
    image: 'assets/images/logos/7.png',
  }, {
    image: 'assets/images/logos/8.png',
  }];

  ngOnInit(): void {
    this.getCollectionProducts("")
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }
  
  generateImgUrl(imgId) {
    return `${environment.API_URI}/attachment/${imgId}`;
  }
}
