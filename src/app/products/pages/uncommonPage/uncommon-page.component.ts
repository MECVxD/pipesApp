import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [],
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Mauricio';
  public gender: 'male' | 'female' = 'male';
  public invitationMap: any = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Luis', 'Jose', 'Emilio'];
  public clientsMap: any = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  public changeClient() {
    this.name = 'Maki';
    this.gender = 'female';
  }

  public deleteClient() {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person: any = {
    name: 'Mauricio',
    age: 35,
    address: 'Yucatan',
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(5000).pipe(
    tap(value => console.log('tap', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
      console.log('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre';
    }, 3500);
  });
}
