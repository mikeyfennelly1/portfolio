import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../misc/navbar/navbar.component';
import { FooterComponent } from '../../../misc/footer/footer.component';

@Component({
  selector: 'app-about-me-thumbnail',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './about-me-thumbnail.component.html',
  styleUrl: './about-me-thumbnail.component.sass'
})
export class AboutMeThumbnailComponent {

}
