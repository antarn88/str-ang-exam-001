import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[], column: string): any[] {
    !Array.isArray(value) || !column ? value : null;
    return value.sort(function(a, b){
      if (typeof a[column] === "number" && typeof b[column] === "number") {
        return a[column] - b[column];
      } 
      else {
        let a2 = String(a[column]).toLowerCase();
        let b2 = String(b[column]).toLowerCase();
        return a2.localeCompare(b2);
      }
    });
  }

}
