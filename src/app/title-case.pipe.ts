import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if(!value) return null;

    let prepositions= [
      'of', 'the'
    ];

    let words= value.split(' ');
    for(var i=0; i < words.length; i++){
      if (i>0 && prepositions.includes(words[i]))
      words[i] = words[i].toLowerCase();
      else{
        words[i]=  words[i].slice(0,1).toUpperCase() + words[i].slice(1).toLowerCase();
      }
  }
    return words.join(' ');
}
}
