import { Routes } from '@angular/router';
import { HomeComponent } from './components/landing-page/home/home.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AboutMeComponent } from './components/blog-page/blogPage/about-me/about-me.component';
import { HowIGotIntoContentCreationComponent } from './components/blog-page/blogPage/how-igot-into-content-creation/how-igot-into-content-creation.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'blog',
        component: BlogPageComponent,
    },
    {
        path: 'blog/about-me',
        component: AboutMeComponent,
    },
    {
        path: 'blog/how-i-got-into-content-creation',
        component: HowIGotIntoContentCreationComponent,
    },
];