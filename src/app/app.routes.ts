import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroMateriaComponent } from './pages/cadastro-materia/cadastro-materia.component'; 

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'cadastro-materia',
        component: CadastroMateriaComponent,
    }
];
