import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component'; Remover, video 48

//Se borran (ver heroes/heroes.modulo.ts)
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.modulo';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
   // ContadorComponent, Remover, video 48
    //HeroeComponent,
    //ListadoComponent
  ],
  imports: [
    BrowserModule,
    //Se importa la clase
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
