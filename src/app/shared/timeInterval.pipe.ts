import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeInterval' })
export class TimeInterval implements PipeTransform {

    transform(value: any) {
        if (value) {
            //Date of when the repos was submitted
            var dateSubmitted= new Date(value);
            //Today's date
            var today= new Date();
            let timeDifference = this.date_diff_indays(dateSubmitted, today);
            return  timeDifference;
        }
        return value;
    }

    //Calculating the difference between two dates in terms of dates
     date_diff_indays = function(date1, date2) {
      let dt1 = new Date(date1);
      let dt2 = new Date(date2);
      return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
      }

}
