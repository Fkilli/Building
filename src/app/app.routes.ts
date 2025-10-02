import { Routes } from '@angular/router';
import { ListBuilding } from './list-building/list-building';
import { DetailBuilding } from './detail-building/detail-building';

export const routes: Routes = [
    { path: 'building', component: ListBuilding},
    { path: 'building/:id', component: DetailBuilding},
    { path: '', redirectTo: 'building', pathMatch: 'full'}
];
