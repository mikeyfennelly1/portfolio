import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItemComponent } from '../portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-brainTumorClassifier',
  standalone: true,
  imports: [CommonModule, PortfolioItemComponent],
  templateUrl: './brainTumorClassifier.component.html',
  styleUrl: './brainTumorClassifier.component.sass'
})
export class BrainTumorClassifierComponent {
  itemTitle: string = "Brain Tumor Classifier";
  itemDescription: string = "This project is an image classifier that uses a convolutional neural network to classify brain scans, predicting if patients have brain tumors.";
  itemTechnologies: Array<itemTechnologiesObject> = [
    { name: "Python", link: "https://www.python.org/" },
    { name: "Tensorflow", link: "https://www.tensorflow.org/" },
    { name: "Keras", link: "https://keras.io/" },
    { name: "OpenCV", link: "https://opencv.org/" },
    { name: "Matplotlib", link: "https://matplotlib.org/" },
    { name: "Pandas", link: "https://pandas.pydata.org/" },
  ];
  linkToSourceCode: string = "ExampleSourceCode";
  linkToVideo: string = "ExampleLinkToVideo";
  pathToThumbnail: string = "../../../../../../assets/images/brainScanThumbnail.png"
}
interface itemTechnologiesObject {
  name: string;
  link: string
}