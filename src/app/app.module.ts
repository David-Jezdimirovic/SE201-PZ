import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutingModule } from './routing/routing.module';
import { NavigacijaComponent } from './pages/navigacija/navigacija.component';
import { ListaPacijenataComponent } from './pages/lista-pacijenata/lista-pacijenata.component';
import { PacijentOComponent } from './pages/pacijent-o/pacijent-o.component';
import { KreiranjepacijentaComponent } from './pages/kreiranjepacijenta/kreiranjepacijenta.component';
import { PacijentOpuComponent } from './pages/pacijent-opu/pacijent-opu.component';
import { UnospodatakaComponent } from './pages/unospodataka/unospodataka.component';
import { PremestipacijentaComponent } from './pages/premestipacijenta/premestipacijenta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigacijaComponent,
    ListaPacijenataComponent,
    PacijentOComponent,
    KreiranjepacijentaComponent,
    PacijentOpuComponent,
    UnospodatakaComponent,
    PremestipacijentaComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
