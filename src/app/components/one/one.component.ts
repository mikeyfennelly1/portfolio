import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharlemagneDBComponent } from '../charlemagne-db/charlemagne-db.component';
import { PointsLabComponent } from '../points-lab/points-lab.component';
import { MyportfolioComponent } from '../myportfolio/myportfolio.component';
import { Blog1Component } from '../blog1/blog1.component';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule, CharlemagneDBComponent, PointsLabComponent, MyportfolioComponent, Blog1Component],
  templateUrl: './one.component.html',
  styleUrl: './one.component.sass'
})
export class OneComponent {

}
