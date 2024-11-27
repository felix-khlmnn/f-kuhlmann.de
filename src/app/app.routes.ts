import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainComponent, title: 'f-kuhlmann.de - Startseite'},
    { path: 'impressum', component: ImprintComponent, title: 'f-kuhlmann.de - Impressum'}
];
