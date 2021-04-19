import { Component, OnInit, Input } from '@angular/core';
import { FetchMainCategoriesForMarketGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styleUrls: ['./footer-one.component.scss']
})
export class FooterOneComponent implements OnInit {

  @Input() class: string = 'footer-light' // Default class 
  @Input() themeLogo: string = 'assets/images/icon/logo.jpeg' // Default Logo
  @Input() newsletter: boolean = true; // Default True

  public today: number = Date.now();
  public categories: any[] = []
  constructor(
    private readonly fetchMainCategoriesForMarketGQL: FetchMainCategoriesForMarketGQL
  ) {
    this.fetchMainCategoriesForMarketGQL.fetch({}).subscribe(
      ({ data }) => {
        this.categories = data.fetchMainCategoriesForMarket;
      }
    )
  }

  ngOnInit(): void {
  }

}
