import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-points-lab',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  templateUrl: './points-lab.component.html',
  styleUrl: './points-lab.component.sass'
})
export class PointsLabComponent {
  itemTitle: string = "Points Lab";
  itemDescription: string = "Points Lab is a concept online learning platform aimed at making the Irish second level education system more accessible to daydreamers. Students get access to video tutorials and exam questions, topic by topic.";
  itemTechnologies: Array<itemTechnologiesObject> = [
    { name: "HTML5", link: "https://www.w3schools.com/html/" },
    { name: "SASS", link: "https://sass-lang.com/" },
    { name: "JavaScript", link: "https://www.javascript.com/" },
    { name: "MongoDB", link: "https://www.mongodb.com/" },
    { name: "NodeJS", link: "https://nodejs.org/en" },
    { name: "ExpressJS", link: "https://expressjs.com/" },
    { name: "Docker", link: "https://www.docker.com/" },
    { name: "GitHub Actions", link: "https://github.com/features/actions" },
    { name: "Adobe Illustrator", link: "https://www.adobe.com/ie/products/illustrator/" },
    { name: "Figma", link: "https://www.figma.com/" },
  ];
  linkToSourceCode: string = "https://github.com/mikeyfennelly1/points-lab";
  linkToVideo: string = "https://youtu.be/t_BXC6XJVSE";
  linkToLiveSite: string = "https://mikeyfennelly1.github.io/points-lab/";
  pathToThumbnail: string = "../../../assets/images/pointsLabThumbnail.png";
}
interface itemTechnologiesObject {
  name: string;
  link: string
}