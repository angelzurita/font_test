import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './components/lista/lista.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BarChartComponent } from './components/barra/barra.component';
import { ErrorComponent } from './components/error/error.component';

import { GuardScoreGuard } from './guard-score.guard';



// Array de rutas
const appRoutes: Routes = [
    {path:"perfil/:id/:score", component: ProfileComponent, canActivate: [GuardScoreGuard]},
    {path:"barra", component: BarChartComponent},
    {path:'lista', component: ListaComponent},
    {path:'', component: ListaComponent},
    {path:"**", component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
