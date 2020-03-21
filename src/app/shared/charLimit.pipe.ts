import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'charLimit' })
export class CharLimit implements PipeTransform {
    //If carachters of description exceeds 150 show ... after it
    transform(value: any) {
        let limitedDescription : string;
        if (value) {
          limitedDescription = this.dotdotdot(value);
        }
        return limitedDescription;
    }

    //Limiting the description characters to 150
    dotdotdot = function(str) {
      let str2 = String(str);
      if (str2.length > 150)
        return str.substring(0,100) + '...';
      return str;
    }
}

