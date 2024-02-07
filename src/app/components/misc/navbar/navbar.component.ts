import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  softwareProjectsScroll() {
    window.scroll({ 
      top: 1300, 
      behavior: 'smooth' 
  });
}
  contentCreationScroll() {
    window.scroll({ 
      top: 3200, 
      behavior: 'smooth' 
    });
  }
    articleScroll() {
      window.scroll({ 
        top: 4000, 
        behavior: 'smooth' 
    });
  }
}