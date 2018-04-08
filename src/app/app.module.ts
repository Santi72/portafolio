import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

// Rutas
import { app_routing } from "./app.routes";

//Servicios (o providers)
import { InformacionService } from "./services/informacion.service";

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing    
  ],
  providers: [InformacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
