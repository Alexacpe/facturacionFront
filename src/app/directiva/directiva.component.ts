import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  listaDeCosas:string[]=['Cosa1','Cosa2','Cosa3','Cosa4']
  habilitar:boolean=true;

  /** Mostrar ocultar lista  */
  setHabilitar():void{
    this.habilitar = (this.habilitar==true)?false:true
  }

}
