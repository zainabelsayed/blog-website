import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../model/review';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit {

  @Input() review!:Review
  constructor() { }

  ngOnInit(): void {
  }

}
