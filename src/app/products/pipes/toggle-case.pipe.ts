import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})

export class ToggleCasePipe implements PipeTransform {
  public transform(valor: string, toUpper: boolean = false): string {
    return toUpper ? valor.toUpperCase() : valor.toLowerCase();
  }
}
