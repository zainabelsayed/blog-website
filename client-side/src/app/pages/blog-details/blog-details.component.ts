import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/get-data.service'; 
import { Article } from '../../model/article';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  id!: number;
  blogDetails!: Article;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private getData: GetDataService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params.id));
    this.getData.getBlogDetails(this.id).subscribe(
      (data) => {
        this.blogDetails = data;
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
