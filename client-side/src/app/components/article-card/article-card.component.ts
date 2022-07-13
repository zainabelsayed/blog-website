import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../model/article';
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() article!:Article
  constructor(private router:Router) { }
  openBlogDetails(){
    const id = this.article.id
    this.router.navigate([`blog/${id}`])
  }
  ngOnInit(): void {
  }

}
