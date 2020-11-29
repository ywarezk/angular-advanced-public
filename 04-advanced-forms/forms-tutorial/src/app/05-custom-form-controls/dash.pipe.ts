import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dash'})
export class DashPipe implements PipeTransform {
  // transform(value: string, num1, num2, num3)
  transform(value: string, ...positions: number[] ): any {
    let result = '';
    let index = 0;
    for(let num of positions) {
      result += value.substring(index, num);
      result += '-'
      index = num;
    }
    result+=value.substring(index, value.length);
    return result;
  }
}
