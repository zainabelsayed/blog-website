import { Component, OnInit } from '@angular/core';

interface userData {
  email: string;
}

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss'],
})
export class NewsletterFormComponent implements OnInit {
  userData: userData;
  constructor() {
    this.userData = {
      email: '',
    };
  }
  submitNewsletterForm(value: object) {
    console.log(value);
  }
  ngOnInit(): void {}
}
