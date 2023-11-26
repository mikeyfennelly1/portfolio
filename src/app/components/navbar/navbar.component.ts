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
  projectsScroll() {
    window.scroll({ 
      top: 850, 
      behavior: 'smooth' 
  });
}

articleScroll() {
  window.scroll({ 
    top: 1200, 
    behavior: 'smooth' 
});
}
}
