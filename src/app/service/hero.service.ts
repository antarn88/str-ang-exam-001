import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  heroesList: Hero[] = [
    {
      id: 1,
      name: 'Cserkó József',
      superPower: 'Angular, Node.JS',
      address: 'Kecskemét'
    },
    {
      id: 2,
      name: 'Gáll Gergely',
      superPower: 'Vue.Js',
      address: 'Budapest'
    },
    {
      id: 3,
      name: 'Jákob rabbi',
      superPower: 'dancing',
      address: 'Tel-Aviv - Rabbi str. 55.'
    },
    {
      id: 4,
      name: 'Banános Joe',
      superPower: 'banana harvest',
      address: 'Ecuador'
    },
    {
      id: 5,
      name: 'Nicolas',
      superPower: 'learning',
      address: 'Paris'
    },
    {
      id: 6,
      name: 'Illyés Gyula',
      superPower: 'Egy mondat a zsarnokságról',
      address: 'Budapest'
    },
    {
      id: 7,
      name: 'Süsü a sárkány',
      superPower: 'Én vagyok a jó királyfi',
      address: 'Budapest'
    },
    {
      id: 8,
      name: 'Stevie Wonder',
      superPower: 'Superstition',
      address: 'Michigan'
    },
  ];

  getAll(): Hero[] {
    return this.heroesList;
  }
}
