import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Blog1Component } from './components/blog1/blog1.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { MachineLearningDemistifiedComponent } from './components/blogPage/machine-learning-demistified/machine-learning-demistified.component';

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
        path: 'blog/will-i-go-to-university',
        component: MachineLearningDemistifiedComponent,
    }
];