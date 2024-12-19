import { Routes } from '@angular/router';
import { FormsComponent } from './View/pages/forms/forms.component';

import { MoviedetailsComponent } from './View/moviedetails/moviedetails.component';
import { MovieCardComponent } from './Components/MovieCard/MovieCard.component';

export const routes: Routes = [
{
//ponga las rutas mi patron
path:'forms',
component:FormsComponent
},
{
path:'moviedetails',
component:MoviedetailsComponent
},
{
    path:'',
    component:MovieCardComponent,
    pathMatch:'full'
}
];
