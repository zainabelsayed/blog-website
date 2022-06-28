import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  lightMode: boolean = false;
  @ViewChild('navBar') navBar!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  // change navbar background color onscroll
  handleScroll() {
    const element = this.navBar.nativeElement as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      if(element.classList.contains('navbar-dark')){
        element.classList.add('navbar--onscroll');
      }else{
        element.classList.add('navbar-light--onscroll');
      }
    } else {
      element.classList.remove('navbar-light--onscroll');
      element.classList.remove('navbar--onscroll');
    }
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    // change navabar style when changing routes
    this.router.events.subscribe(() => {
      const nav = this.navBar.nativeElement
      if (this.router.url === '/') {
        nav.classList.add('navbar-dark');
        nav.classList.remove('navbar-light');
        this.lightMode= false
      } else {
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        this.lightMode= true
      }
    });
  }
}
