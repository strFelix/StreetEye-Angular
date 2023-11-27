import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListarsemaforosComponent } from './components/semaforos/listarsemaforos/listarsemaforos.component';
import { CadastrarsemaforosComponent } from './components/semaforos/cadastrarsemaforos/cadastrarsemaforos.component';
import { AtualizarsemaforosComponent } from './components/semaforos/atualizarsemaforos/atualizarsemaforos.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'semaforos', component:ListarsemaforosComponent},
  {path:'semaforos/cadastrar', component:CadastrarsemaforosComponent},
  {path:'semaforos/atualizar/:id', component:AtualizarsemaforosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
