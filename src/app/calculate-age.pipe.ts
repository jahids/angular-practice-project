import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {

  transform(date: any, ...args: unknown[]): unknown {
    console.log("custom pipe call", date);
    return new Date().getFullYear()-new Date(date).getFullYear()
    
  }
}
