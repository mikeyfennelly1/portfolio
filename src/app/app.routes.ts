import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/landing-page/home/home.component';
import { Blog1Component } from './components/blog-page/blog-thumbnail/blog1.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AboutMeComponent } from './components/blog-page/blogPage/about-me/about-me.component';

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
    }
];