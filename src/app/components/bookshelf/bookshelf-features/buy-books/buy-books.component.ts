import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buy-books.component.html',
  styleUrl: './buy-books.component.sass',
  template: `List To Book: {{linkTOBook}}`
})
export class BuyBooksComponent {
  @Input ({ required: true }) linkToBookOnAmazon!: string;
  @Input ({ required: true }) linkToBookOnBookshop!: string;
  @Input ({ required: true }) linkToBookOnBarnesAndNoble!: string;
}
