import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RussianSpyComponent } from './russian-spy/russian-spy.component';
import { BrittneyGrinerComponent } from './brittney-griner/brittney-griner.component';
import { GavinGrantComponent } from './gavin-grant/gavin-grant.component';
import { LiverpoolComponent } from './liverpool/liverpool.component';

@Component({
  selector: 'app-youtube-page',
  standalone: true,
  imports: [CommonModule, RussianSpyComponent, BrittneyGrinerComponent, GavinGrantComponent, LiverpoolComponent],
  templateUrl: './youtube-page.component.html',
  styleUrl: './youtube-page.component.sass'
})
export class YoutubePageComponent {

}
