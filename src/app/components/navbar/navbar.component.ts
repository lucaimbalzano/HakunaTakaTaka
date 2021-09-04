import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  
  isFixedNavbar;

  //Bind the element and update it in realtime
  @HostBinding('class.navbar-opened') navbarOpened = false;
  constructor(
  ) { }

  ngOnInit() {
  }
  //When onWindowScroll() is clicked, it updates isFixedNavbar
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
 

}
