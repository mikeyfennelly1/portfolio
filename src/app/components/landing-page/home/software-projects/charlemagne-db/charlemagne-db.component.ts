import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-charlemagne-db',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charlemagne-db.component.html',
  styleUrl: './charlemagne-db.component.sass'
})
export class CharlemagneDBComponent {
  itemTitle: string = "CharlemagneDB";
}
