import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  public nombre: string = 'Mauricio';
  public genero: string = 'masculino';
  public invitacionMapa: any = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  // i18nPlural
  public clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  public clientesMapa: any = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  public cambiarCliente() {
    this.nombre = 'Maki';
    this.genero = 'femenino';
  }

  public borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  public persona: any = {
    nombre: 'Mauricio',
    edad: 35,
    direccion: 'Yucatan',
  };

  // JsonPipe
  public heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  //Async Pipe
  public miObservable = interval(5000);

  public valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
