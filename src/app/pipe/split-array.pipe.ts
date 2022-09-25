import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitArray'
})
export class SplitArrayPipe implements PipeTransform {

  transform(input: Array<any>, sep: ', '): string {
    return input.join(sep);
  }

}
