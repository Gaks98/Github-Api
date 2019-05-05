import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'existence'
})
export class ExistencePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
