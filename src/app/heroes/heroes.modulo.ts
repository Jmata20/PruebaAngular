import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        //Son componentes
        HeroeComponent,
        ListadoComponent
    ],
    //Cosas visibles
    exports: [
        ListadoComponent
    ],
    imports: [
        //Van los módulos
        CommonModule //Ofrece otras directivas, es necesario dejarlo así
    ]
})

export class HeroesModule { }