import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string): string[] {
    !Array.isArray(value) || !phrase ? value : null;
    return value.filter(item => item.name.toLowerCase().includes(phrase.toLowerCase()));
  }

}
