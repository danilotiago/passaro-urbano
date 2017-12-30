import { Routes } from '@angular/router'; // trabalha com o pacote de rotas do angular

// importa os componentes que as rotas vão apontar
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';

// exporta uma constante de rotas do tipo Routes com objetos com path (url) e component (que sera renderizado)
export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'oferta/:id', component: OfertaComponent },
];
