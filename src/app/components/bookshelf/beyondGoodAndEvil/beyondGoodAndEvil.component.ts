import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyBooksComponent } from '../bookshelf-features/buy-books/buy-books.component';

@Component({
  selector: 'app-beyond-good-and-evil',
  standalone: true,
  imports: [CommonModule, BuyBooksComponent],
  templateUrl: './beyondGoodAndEvil.component.html',
  styleUrl: './beyondGoodAndEvil.component.sass'
})
export class BeyondGoodAndEvilComponent {
  linkToBookOnAmazon: string = "https://www.amazon.com/Beyond-Good-Evil-Friedrich-Nietzsche/dp/1503250881/ref=sr_1_5?crid=AWB79FUH1VZH&dib=eyJ2IjoiMSJ9.Z-p-qdPKNa_lGMHc-rxMC4iBxvNqksNU2saJNT6euPqOE5N5UqRGQIxdUI7RYKOxq0o0ty7eHOIy3JYJg-mKB5_PYQbqgyOz3WcS9bLeugrR-ycJYbB3aBdwjc1lgvNwEqmFPo7YUY011cBOLk9C4MfiXey2SuI0qfetxkBle7g3xMH-qNkluCWuMvNEMchAHr-SfCOyaBGee3XanGSJYSZ-36cP5zMFh_28SFaHaFg.pzt5hQDHCYL7RrtU36zwKBCuoMTNI7WyCNhOEC5pugU&dib_tag=se&keywords=Beyond+Good+And+Evil&qid=1710876841&sprefix=beyond+good+and+evil%2Caps%2C196&sr=8-5"
  linkToBookOnBookshop: string = ""
  linkToBookOnBarnesAndNoble: string = "https://www.barnesandnoble.com/w/beyond-good-and-evil-friedrich-wilhelm-nietzsche/1116666926?ean=9780140449235"
}
