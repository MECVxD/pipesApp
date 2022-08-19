import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  public fecha: Date = new Date();
  public nombreCompleto: string = ' MaUrIcIo CoVaRrUbIaS';
  public nombreLower: string = 'mauricio';
  public nombreUpper: string = 'MAURICIO';
}
