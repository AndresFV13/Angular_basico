import { Component, Input } from '@angular/core';
import { DbzServices } from '../services/dez.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzServices.personajes;
  }

  constructor( private dbzServices: DbzServices ){
  }
}
