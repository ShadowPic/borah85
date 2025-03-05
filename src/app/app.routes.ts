import { Routes } from '@angular/router';
import { RosterComponent } from './roster/roster.component';
import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { ReunionComponent } from './reunion/reunion.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: 'roster', component: RosterComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'news', component: NewsComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'reunion', component: ReunionComponent },
    { path: '', component: HomeComponent }
];

