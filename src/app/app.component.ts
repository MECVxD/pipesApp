import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'pipesApp';
  public nombre: string = 'mauricio covarrubiAs';
  public valor: number = 1000;
  public obj = {
    nombre: 'Mauricio',
  };

  public mostrarNombre(): void {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
