import { Routes } from '@angular/router';
import { PreWaiverComponent } from './pre-waiver/pre-waiver.component';

export const routes: Routes = [
    {path: '', redirectTo: 'pre-waiver', pathMatch: 'full'},
    {path: 'pre-waiver', component: PreWaiverComponent}   
];
