import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-myportfolio',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  templateUrl: './myportfolio.component.html',
  styleUrl: './myportfolio.component.sass'
})
export class MyportfolioComponent {
  itemTitle: string = "My Portfolio";
  itemDescription: string = "The site you are on right now!";
  itemTechnologies: Array<itemTechnologiesObject> = [
    { name: "Angular", link: "https://angular.io/" },
    { name: "Bootstrap", link: "https://getbootstrap.com/" },
    { name: "Figma", link: "https://www.figma.com/" },
    { name: "GitHub Actions", link: "https://github.com/features/actions" },

  ];
  linkToSourceCode: string = "https://github.com/mikeyfennelly1/portfolio";
  linkToVideo: string = "https://youtu.be/t_BXC6XJVSE";
  linkToLiveSite: string = "/";
  pathToThumbnail: string = "../../../assets/images/portfolioThumbnail.png";
}
interface itemTechnologiesObject {
  name: string;
  link: string
}