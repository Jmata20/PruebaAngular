import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Gokú', 'Thor', 'Ragnar', 'Ubbe'];
  elementoBorrado: string=''

  borrarHeroe() {
    
    this.elementoBorrado= this.heroes.shift() || '';
    console.log("Borrando...");
    

  }


}
