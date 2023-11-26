import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';

import { CadastrarsemaforosComponent } from './components/semaforos/cadastrarsemaforos/cadastrarsemaforos.component';
import { AtualizarsemaforosComponent } from './components/semaforos/atualizarsemaforos/atualizarsemaforos.component';
import { ListarsemaforosComponent } from './components/semaforos/listarsemaforos/listarsemaforos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListarsemaforosComponent,
    CadastrarsemaforosComponent,
    AtualizarsemaforosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
