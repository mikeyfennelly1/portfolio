import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../misc/navbar/navbar.component';
import { FooterComponent } from '../misc/footer/footer.component';
import { AboutMeThumbnailComponent } from './blogPage/about-me-thumnail/about-me-thumnail.component';
import { HowIGotIntoContentCreationThumbnailComponent } from './blogPage/how-igot-into-content-creation-thumbnail/how-igot-into-content-creation-thumbnail.component';
import { HowIGotIntoContentCreationComponent } from './blogPage/how-igot-into-content-creation/how-igot-into-content-creation.component';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, AboutMeThumbnailComponent, HowIGotIntoContentCreationThumbnailComponent, HowIGotIntoContentCreationComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.sass'
})
export class BlogPageComponent {

}
