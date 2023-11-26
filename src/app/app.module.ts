import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'


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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
