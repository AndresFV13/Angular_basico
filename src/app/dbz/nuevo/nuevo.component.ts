import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dez.services';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzServices: DbzServices ) {}

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar( ){
    if( this.nuevo.nombre.trim().length === 0 ){
      return
    }

    // this.onNewPersonaje.emit( this.nuevo );
    this.dbzServices.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
