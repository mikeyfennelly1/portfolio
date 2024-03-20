import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyBooksComponent } from '../bookshelf-features/buy-books/buy-books.component';

@Component({
  selector: 'app-steve-jobs',
  standalone: true,
  imports: [CommonModule, BuyBooksComponent],
  templateUrl: './steveJobs.component.html',
  styleUrl: './steveJobs.component.sass',
})
export class SteveJobsComponent {
  linkToBookOnAmazon: string = 'https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/147770146X/ref=sr_1_2?crid=DZWVZ5OIBT4O&dib=eyJ2IjoiMSJ9.k_xqKlDXQ2Nf4zaCq1rU5HQ0Zlzv0936UI5zc06ip0P_J8WGTqjhWaZ9xxDMhWtL2JUsbaf14MDooWOK8-UM2fgTkwTZwpruvyvmhl1n4_uBXZcM5y6dAs2yUyZDLMJl3WBVbCjTQfT7R4JAOI6Hxnx8YGH0CY9YcEoNG5P9gKKvE8RtlDa_XxdTFM96c-xbJh7gr8sO-RJYY3nuM9YwNYgmD9CjUzLvqbfYr3gn-vWwXKF6fpQFAEhtRPz3F5V1eHkNWvtsgOeiFIGpofPli9GellqpjtuU_uUwKI7PEtI.fP_UlYwF-7CwqFMI3sA1TgvHS1xgM6hI04P9gGqFZL8&dib_tag=se&keywords=Steve+Jobs&qid=1710876770&sprefix=steve+jobs%2Caps%2C611&sr=8-2'
  linkToBookOnBookshop: string = ""
  linkToBookOnBarnesAndNoble: string = ""
}