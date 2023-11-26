import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Blog1Component } from '../blog1/blog1.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, Blog1Component],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.sass'
})
export class BlogPageComponent {

}
