import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../misc/navbar/navbar.component';
import { FooterComponent } from '../../../misc/footer/footer.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.sass'
})
export class AboutMeComponent {

}
