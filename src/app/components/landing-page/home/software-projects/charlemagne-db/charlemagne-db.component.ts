import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-charlemagne-db',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  templateUrl: './charlemagne-db.component.html',
  styleUrl: './charlemagne-db.component.sass'
})
export class CharlemagneDBComponent {
  itemTitle: string = "CharlemagneDB";
  itemDescription: string = "CharlemagneDB is an website for a concept database platform that is AI oriented in its development process to automate many of the reduntant tasks in database configuration for applications.";
  itemTechnologies: Array<itemTechnologiesObject> = [
    { name: "React", link: "https://react.dev/" },
    { name: "GSAP", link: "https://gsap.com/" },
    { name: "TailwindCSS", link: "https://tailwindcss.com/" },
    { name: "Figma", link: "https://www.figma.com/" },
    { name: "Adobe XD", link: "https://helpx.adobe.com/ie/support/xd.html" },
    { name: "Docker", link: "https://www.docker.com/" },
    { name: "Framer Motion", link: "https://www.framer.com/motion/" },
    { name: "Firebase", link: "https://firebase.google.com/" },
  ];
  linkToSourceCode: string = "https://github.com/mikeyfennelly1/CharlamagneDB";
  linkToVideo: string = "https://youtu.be/0XHZatftaTI";
  pathToThumbnail: string = "../../../assets/images/charlemagneDBThumbnail.png";
  linkToLiveSite: string = "https://mikeyfennelly1.github.io/CharlamagneDB/";
}
interface itemTechnologiesObject {
  name: string;
  link: string
}