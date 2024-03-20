import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyBooksComponent } from '../bookshelf-features/buy-books/buy-books.component';

@Component({
  selector: 'app-elon-musk',
  standalone: true,
  imports: [CommonModule, BuyBooksComponent],
  templateUrl: './elonMusk.component.html',
  styleUrl: './elonMusk.component.sass'
})
export class ElonMuskComponent {
  linkToBookOnAmazon: string = "https://www.amazon.com/Elon-Musk-Walter-Isaacson/dp/1982181281/ref=sr_1_1?crid=31EA42G4WA1UL&dib=eyJ2IjoiMSJ9.uYkeaYkXIVKae3zGi3B0UEOIiRj5qi7QpbNaYyx1fA6ltwhjKvVsCAEI0W-umfCtOr_jkNO0_ezVPvbbdXxh24pBxouC0WadZ5PwXc0ZrvsdpVXpQu5oUBt2PA2u5T_U5GXQhzcbE8G2IAbCu5q6lPy6lUwDbyiSBeMmEXnhaFe-1b3pRiK_fuF06ks3_gVcDPCjV3MDTS5OwnmoOnZdVbgh78maacskezzC5J1YEyA.J9ra5OI5eg80eLukQEZ2SJ01vGCVikqyyLcvRoo24GY&dib_tag=se&keywords=Elon+Musk&qid=1710876970&sprefix=elon+musk%2Caps%2C227&sr=8-1"
  linkToBookOnBookshop: string = ""
  linkToBookOnBarnesAndNoble: string = "https://www.barnesandnoble.com/w/elon-musk-walter-isaacson/1143499671?ean=9781982181284"
}
