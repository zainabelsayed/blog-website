import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../get-data.service';
import { Article } from '../model/article';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  @ViewChild('blogDetailText') blogDetailText!: ElementRef;
  id!: number;
  blogDetails!: Article;
  loading: boolean = true;
  constructor(private route: ActivatedRoute, private getData: GetDataService) {
    this.route.params.subscribe((params) => (this.id = params.id));
  }

  ngOnInit(): void {
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
  ngAfterViewInit() {
    setTimeout(() => {
        this.blogDetailText.nativeElement.innerHTML = this.blogDetails.details;
    },1000);
  }
}
