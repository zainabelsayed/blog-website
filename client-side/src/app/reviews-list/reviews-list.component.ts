import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation } from 'swiper';
import { GetDataService } from '../get-data.service';
import { Review } from '../model/review';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReviewsListComponent implements OnInit {
  reviews: Review[] =[]
  constructor(private getData:GetDataService) {}

  ngOnInit(): void {
    this.getData.getReviews().subscribe(
      data => {
      this.reviews = data
      this.reviews.map(item => item.stars = new Array(5).fill(1))
      },
      error => {
      console.log('error: ', error);
      },
      () => {
      console.log('complete', "complete");
      }
      );
  }
}
