import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.sass'
})

export class PortfolioItemComponent {
  @Input ({ required: true }) itemTitle!: string;
  @Input ({ required: true }) itemDescription!: string;
  @Input ({ required: true }) itemTechnologies!: Array<itemTechnologiesObject>;
  @Input ({ required: true }) linkToSourceCode!: string;
  @Input ({ required: true }) linkToVideo!: string;
  @Input ({ required: true }) linkToLiveSite!: string;
  @Input ({ required: true }) pathToThumbnail!: string;
  
  pathToGithubLogoImg: string = "../../../assets/images/githubLogo.png"
  pathToExternalSiteLogoImg: string = "../../../assets/images/OOjs_UI_icon_external-link-ltr-invert.svg.png"
  pathToYouTubeImg: string = "../../../../../../assets/images/youtubeLogo 1 (3).png"
}

interface itemTechnologiesObject {
  name: string;
  link: string
}