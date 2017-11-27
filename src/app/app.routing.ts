import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddNewJerseyComponent } from './components/add-new-jersey/add-new-jersey.component';
import { JerseyListComponent } from './components/jersey-list/jersey-list.component';

const appRoutes: Routes =  [
    {
        path : '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'addNewJersey',
        component: AddNewJerseyComponent
    },
    {
        path: 'jerseyList',
        component: JerseyListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
