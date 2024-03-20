import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyBooksComponent } from '../bookshelf-features/buy-books/buy-books.component';

@Component({
  selector: 'app-atomic-habits',
  standalone: true,
  imports: [CommonModule, BuyBooksComponent],
  templateUrl: './atomicHabits.component.html',
  styleUrl: './atomicHabits.component.sass'
})
export class AtomicHabitsComponent {
  linkToBookOnAmazon = "https://www.amazon.com/Atomic-Habits-James-Clear-audiobook/dp/B07RFSSYBH/ref=sr_1_1?crid=3OZ37XF0ZTIOY&dib=eyJ2IjoiMSJ9.ZXKWFGHkrAQKXnVsBAK_ABaF2ZN7sYMp4x0AjwOIopQSrWlpnGzu3X4tmdIeZMAO2qiI8Gj1bnwRbIvP_JFA1YjjQYXE4aNU7EjGY37hLwAzFpPFpHFSO5jvkwjOh84c_pJFLQkiaQwQ0dQHmZDIeFM55pCdPU18gQWbxBRUf770Mrseg4OZ2v8lxP6mb1V3bQebmdj-4BAKlkOCmKPAtlm-WU2IQ9lNvDWg_PWK2YI.nfN_DYkQDTFSwremGTbBgmdPe4n2SF7NRvcTTIkxyjk&dib_tag=se&keywords=Atomic+Habits&qid=1710876802&sprefix=atomic+habits%2Caps%2C257&sr=8-1"
  linkToBookOnBookshop: string = "https://thebookshop.ie/walter-isaacson-steve-jobs-large-paperback/"
  linkToBookOnBarnesAndNoble: string = "https://www.barnesandnoble.com/w/steve-jobs-walter-isaacson/1104099551?ean=9781982176860"
}
