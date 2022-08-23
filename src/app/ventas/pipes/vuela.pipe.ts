import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
  public transform(value: boolean): string {
    return value ? 'vuela' : 'no vuela';
  }
}
