import { Pipe, PipeTransform } from '@angular/core';

import { AuthorsModel } from '../../models/authors.model';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(value: AuthorsModel[], filterText: string): any {
    filterText = filterText ? filterText.toLowerCase(): "";

    if(value){
      let filteredValues = value.filter((author: AuthorsModel) => {
        return author.name.toLowerCase().indexOf(filterText) !== -1
      });
      return filteredValues;
    }
    else{
      return value;
    }
  
  }

}
