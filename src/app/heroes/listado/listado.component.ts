import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

 heroes: string [] = ['spiderman','ironman','hulk','thor','capitan america'];
 heroeborrado: string = '';

  borrarheroe() {
  const heroeborrado = this.heroes.shift() || '';
  this.heroeborrado = heroeborrado;
 }
}
