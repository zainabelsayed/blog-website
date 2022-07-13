import { Component, OnInit } from '@angular/core';

interface userData {
  email: string;
}
@Component({
  selector: 'app-early-access-form',
  templateUrl: './early-access-form.component.html',
  styleUrls: ['./early-access-form.component.scss'],
})
export class EarlyAccessFormComponent implements OnInit {
  userData: userData;
  
  constructor() {
    this.userData={
      email:''
    }
  }

  ngOnInit(): void {}
  submitEarlyAccessForm(value:object) {
    console.log(value);
  }
}
