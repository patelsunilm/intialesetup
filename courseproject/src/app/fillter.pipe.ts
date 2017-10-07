import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillter',
  pure: false
})
export class FillterPipe implements PipeTransform {

  transform(value: any, fillterString: string, propName: string): any {
    if(value.length === 0 || fillterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === fillterString) {
        resultArray.push(item); 
      }
    }
    return resultArray;
  }

}
 