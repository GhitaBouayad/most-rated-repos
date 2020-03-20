import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'charLimit' })
export class CharLimit implements PipeTransform {

    transform(value: any) {
        let limitedDescription : string;
        if (value) {
          limitedDescription = this.dotdotdot(value);
        }
        return limitedDescription;
    }

    //limiting the description characters to 150
    dotdotdot = function(str) {
      let str2 = String(str);
      if (str2.length > 150)
        return str.substring(0,100) + '...';
      return str;
    }
}

