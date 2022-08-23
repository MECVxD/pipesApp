import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  public enMayusculas: boolean = true;
  public ordenarPor: string = '';
  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  public changeValue(): boolean {
    if (this.enMayusculas) {
      return (this.enMayusculas = false);
    }
    return (this.enMayusculas = true);
    // this.enMayusculas = !this.enMayusculas;
  }

  public changeOrder(valor: string): void {
    this.ordenarPor = valor;
  }
}
