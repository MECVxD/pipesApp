import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  public transform(value: boolean): 'vuela' | 'no vuela' {
    return value ? 'vuela' : 'no vuela';
  }
}
