import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyBooksComponent } from '../bookshelf-features/buy-books/buy-books.component';

@Component({
  selector: 'app-the-boron-letters',
  standalone: true,
  imports: [CommonModule, BuyBooksComponent],
  templateUrl: './theBoronLetters.component.html',
  styleUrl: './theBoronLetters.component.sass'
})
export class TheBoronLettersComponent {
  linkToBookOnAmazon: string = "https://www.amazon.com/Boron-Letters-Gary-C-Halbert/dp/1484825985/ref=sr_1_1?crid=2VJG9KUJXF5KY&dib=eyJ2IjoiMSJ9.ylyYHGCjx_m6XACBGuTpIM-Iq6cfvhr45b-Y_WaX1dv1nEDzOEwvNzmuU3HFeOti6BI-dwD5lcsWQz31IDCq-g19-cfXz5zIIwvueN5EsqTV_RO7mlViUNjVIgDvigi_iTkQwR2gN8Vtv0dyIBPxon8xrlYSxgIimZNS1tAox0xiuPn2VkZaHrsq8BscTdF5oK61bTGnnCFCYaVyyuot9pXmf89rS72K7DSvMEPIX0A.WE8crHrMOYUB_Av5P_Yo0tjWeBir3DL6ct67v4iQg88&dib_tag=se&keywords=The+Boron+Letters&qid=1710876905&s=audible&sprefix=the+boron+letter%2Caudible%2C175&sr=1-1-catcorr"
  linkToBookOnBookshop: string = ""
  linkToBookOnBarnesAndNoble: string = "https://www.barnesandnoble.com/w/summary-of-gary-halbert-bond-halberts-the-boron-letters-everest-media/1141654539?ean=9798822531963"
}