import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../misc/navbar/navbar.component';
import { HeaderComponent } from './hero/header/header.component';
import { HeroComponent } from './hero/hero.component';
import { OneComponent } from '../../landing-page/home/software-projects/one.component';
import { FooterComponent } from '../../misc/footer/footer.component';
import { YoutubePageComponent } from '../youtube-page/youtube-page.component';
import { BlogPageComponent } from '../../blog-page/blog-page.component';
import { Blog1Component } from '../../blog-page/blog-thumbnail/blog1.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeaderComponent, HeroComponent, OneComponent, YoutubePageComponent, BlogPageComponent, Blog1Component, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
