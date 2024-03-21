import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../misc/navbar/navbar.component';
import { FooterComponent } from '../misc/footer/footer.component';
import { SteveJobsComponent } from './steveJobs/steveJobs.component';
import { ElonMuskComponent } from './elonMusk/elonMusk.component';
import { ThinkingFastAndSlowComponent } from './thinkingFastAndSlow/thinkingFastAndSlow.component';
import { BeyondGoodAndEvilComponent } from './beyondGoodAndEvil/beyondGoodAndEvil.component';
import { OglivyOnAdvertisingComponent } from './oglivyOnAdvertising/oglivyOnAdvertising.component';
import { TheBoronLettersComponent } from './theBoronLetters/theBoronLetters.component';
import { AtomicHabitsComponent } from './atomicHabits/atomicHabits.component';
import { TableOfContentsComponent } from './bookshelf-features/table-of-contents/table-of-contents.component';

@Component({
  selector: 'app-bookshelf',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, SteveJobsComponent, ElonMuskComponent, ThinkingFastAndSlowComponent, BeyondGoodAndEvilComponent, OglivyOnAdvertisingComponent, TheBoronLettersComponent, AtomicHabitsComponent, TableOfContentsComponent],
  templateUrl: './bookshelf.component.html',
  styleUrl: './bookshelf.component.sass'
})
export class BookshelfComponent {

}
