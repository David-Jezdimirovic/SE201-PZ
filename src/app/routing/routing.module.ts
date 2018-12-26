import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { ListaPacijenataComponent} from '../pages/lista-pacijenata/lista-pacijenata.component'
import { PacijentOComponent }  from '../pages/pacijent-o/pacijent-o.component'
import { KreiranjepacijentaComponent } from '../pages/kreiranjepacijenta/kreiranjepacijenta.component';
import { PacijentOpuComponent } from '../pages/pacijent-opu/pacijent-opu.component';
import { UnospodatakaComponent } from '../pages/unospodataka/unospodataka.component';
import { PremestipacijentaComponent } from '../pages/premestipacijenta/premestipacijenta.component';
  

const routes: Routes = [
  //{ path: '', component: PocetnaComponent}, //index stranica
  { path: '', redirectTo: 'login', pathMatch: 'full'}, // redirekcija na login stranicu
  { path: 'login', component: LoginComponent },
  { path: 'lista-pacijenata', component: ListaPacijenataComponent },
  { path: 'pacijent-o', component: PacijentOComponent },
  { path: 'kreiranjepacijenta', component: KreiranjepacijentaComponent },
  { path: 'pacijent-opu', component: PacijentOpuComponent },
  { path: 'unospodataka', component: UnospodatakaComponent },
  { path: 'premestipacijenta', component: PremestipacijentaComponent },
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
