import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CreatecarComponent } from './components/createcar/createcar.component';
import { DeletecarComponent } from './components/deletecar/deletecar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path: '', 
  component: AccueilComponent
},
{path: 'car/:id', 
  component: CardetailComponent
},
{path: 'create-car', 
  component: CreatecarComponent
},
{path: 'delete-car/:id', 
  component: DeletecarComponent
},
{path: '**',
 component: NotfoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
