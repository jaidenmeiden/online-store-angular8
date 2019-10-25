import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  // Generación automática
  //transform(value: any, ...args: any[]): any {
  //  return null;
  //}

  // Modificado
  transform(value: number): any {
    return Math.pow(value, 2);
  }
}
