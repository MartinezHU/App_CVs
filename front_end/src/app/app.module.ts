import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './pages/main/main.component';
import { PlantillasComponent } from './pages/plantillas/plantillas.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlantillasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
