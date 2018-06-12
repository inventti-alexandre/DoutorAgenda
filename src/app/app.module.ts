import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MedicoComponent } from './medico/medico.component';
import { MedicoService } from './medico/medico-api.service';
import { DataService } from './services/dataService';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { Configuration } from './app.constants';


@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [MedicoService, DataService, HttpClient, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
