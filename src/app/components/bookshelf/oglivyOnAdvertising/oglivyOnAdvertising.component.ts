import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyBooksComponent } from '../bookshelf-features/buy-books/buy-books.component';

@Component({
  selector: 'app-oglivy-on-advertising',
  standalone: true,
  imports: [CommonModule, BuyBooksComponent],
  templateUrl: './oglivyOnAdvertising.component.html',
  styleUrl: './oglivyOnAdvertising.component.sass'
})
export class OglivyOnAdvertisingComponent {
  linkToBookOnAmazon: string = "https://www.amazon.com/Ogilvy-Advertising-David/dp/039472903X/ref=sr_1_1?crid=1OVDA804WNIV3&dib=eyJ2IjoiMSJ9.doPRfyhfo4B8Ovi6sgCkLmyRAr9gG1k2Jx4c8ZYjh6IvpsELrF18yQ9drMVjW_niB751MrvhroCiW6VPE0dnLxm5Kb5Qrhdnu3YVBTBMslJJz9E1w8gvXMKVJk254gv9qsCxQZZu6Z0SCIW57dBgk0MAEWSCT6f5G6JZJ4sWYKqYCoR4oaQvkm_q_dlrJvFkx_POhSMTY1_y3MyscxQk-xUt6ijdWa3BoeWz6lzpW4M.Q0ax1jSzo9ch5Q2KnfLFgMszqOnIz8GbaTINKLgwzOw&dib_tag=se&keywords=Ogilvy+on+Advertising&qid=1710876930&sprefix=ogilvy+on+advertising%2Caps%2C411&sr=8-1"
  linkToBookOnBookshop: string = ""
  linkToBookOnBarnesAndNoble: string = "https://www.barnesandnoble.com/w/ogilvy-on-advertising-david-ogilvy/1118007054?ean=9780394729039"
}
