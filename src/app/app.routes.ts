import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';

export const routes: Routes = [

    {
        path:"login",
        component: LoginComponent

    },
    {
        path:"bienvenido",
        component: BienvenidoComponent
    },
    {
        path:"error",
        component: ErrorComponent
    },
    {
        path:"ejercicio1",
        component: Ejercicio1Component
    }

];
