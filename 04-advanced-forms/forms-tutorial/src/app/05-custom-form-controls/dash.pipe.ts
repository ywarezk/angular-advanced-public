import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dash'})
export class DashPipe implements PipeTransform {
  // transform(value: string, num1, num2, num3)
  transform(value: string, ...positions: number[] ): any {
    let result = '';
    let index = 0;
    if (value.length <= positions[0]) return value;
    for(let num of positions) {
      if (value[index] === '-') index++;
      result += value.substring(index, num);
      result += '-'
      index = num;
    }
    if (value[index] === '-') {
      result += value.substring(index + 1, value.length);
    } else {
      result += value.substring(index, value.length);
    }
    return result;
  }
}
