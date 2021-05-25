import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{titulo}}</h1>

        <h3>La base es: <strong> {{ base }}</strong></h3>
    
        <button (click)="contador( +base );"> Sumar +1</button> 
    
        <span> {{ numero }} </span>

        <button (click)="contador( -base );"> Restar -1</button>


    
    `
})

export class ContadorComponent {

    titulo: String = 'Contador Angular'; //Es buena practica poner el tipado de los datos
    numero: number = 0;
    base: number= 3;
  
    contador(valor: number){
      this.numero += valor;
    }
}