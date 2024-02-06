import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharlemagneDBComponent } from './charlemagne-db/charlemagne-db.component';
import { PointsLabComponent } from '../../../landing-page/home/software-projects/points-lab/points-lab.component';
import { MyportfolioComponent } from '../../../landing-page/home/software-projects/myportfolio/myportfolio.component';
import { Blog1Component } from '../../../blog-page/blog-thumbnail/blog1.component';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule, CharlemagneDBComponent, PointsLabComponent, MyportfolioComponent, Blog1Component],
  templateUrl: './one.component.html',
  styleUrl: './one.component.sass'
})
export class OneComponent {

}