import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-machine-learning-demistified',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './machine-learning-demistified.component.html',
  styleUrl: './machine-learning-demistified.component.sass'
})
export class MachineLearningDemistifiedComponent {

}
