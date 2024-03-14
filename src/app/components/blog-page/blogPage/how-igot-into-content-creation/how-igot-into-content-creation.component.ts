import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../misc/navbar/navbar.component';
import { FooterComponent } from '../../../misc/footer/footer.component';

@Component({
  selector: 'app-how-igot-into-content-creation',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './how-igot-into-content-creation.component.html',
  styleUrl: './how-igot-into-content-creation.component.sass'
})
export class HowIGotIntoContentCreationComponent {

}
