import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Grid, SwiperOptions } from 'swiper';
import { GetDataService } from '../../get-data.service';
import { Article } from '../../model/article';

SwiperCore.use([Pagination, Grid]);
@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlesListComponent implements OnInit {
  articles: Array<Article> = [];
  loading: boolean = true;
  pagination={
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  config: SwiperOptions = {
    observeParents:true,
    observer:true,
    breakpoints: {
      // when window width is >= 280px
      280: {
        slidesPerView: 1,
        slidesPerGroup:1,
        spaceBetween: 20,
        grid:{
          rows:3
        }
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        slidesPerGroup:2,
        spaceBetween: 30,
        grid:{
          rows:3
        }
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        slidesPerGroup:3,
        spaceBetween: 20,
        grid:{
          rows:3
        }
      }
    }
  };
  constructor(private getData: GetDataService) {}
  ngOnInit(): void {
    this.getData.getArticles().subscribe(
      (data) => {
        this.articles = data;
        this.loading = false;
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete', 'complete');
      }
    );
  }
}
