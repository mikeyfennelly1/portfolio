import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyBooksComponent } from '../bookshelf-features/buy-books/buy-books.component';

@Component({
  selector: 'app-thinking-fast-and-slow',
  standalone: true,
  imports: [CommonModule, BuyBooksComponent],
  templateUrl: './thinkingFastAndSlow.component.html',
  styleUrl: './thinkingFastAndSlow.component.sass'
})
export class ThinkingFastAndSlowComponent {
  linkToBookOnAmazon: string = "https://www.amazon.com/Thinking-Fast-and-Slow-audiobook/dp/B005Z9GAJG/ref=sr_1_1?crid=1RDSW7VNETM8H&dib=eyJ2IjoiMSJ9.KP7SbRzcre9DpN2LWPIgYeuUQQSnHrRQrcy8gnDT93CHxkVrjQ0oAHcmliIH1W_Y9b76DeN80hQnhhtwRj5B69MUvJdywQr2Qhyj0Qu_TcQI_WNq7hlqG_LXQCcCFQVUn-ORhvWlT2Mh6gLdCRnzmfIgQUpBu9hENmOG0ZAXuyJv-SLmZcKlRLxjVVz8J3lWMeEdfo6_uhn1KgG9TAbenmI2rfxuutQlhdyj2aW_NRs.SJJpcDeqo2GAZWz9ujSFlWc8KBX4FSwaZuSGiAnRWZ8&dib_tag=se&keywords=Thinking+Fast+and+Slow&qid=1710876881&sprefix=thinking+fast+and+slo%2Caps%2C181&sr=8-1"
  linkToBookOnBookshop: string = "https://thebookshop.ie/kahneman-daniel-thinking-fast-and-slow/"
  linkToBookOnBarnesAndNoble: string = "https://www.barnesandnoble.com/w/thinking-fast-and-slow-daniel-kahneman/1100169801?ean=9780374533557"
}