import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'duration'
  })
  export class DurationPipe implements PipeTransform {
  
    transform(value: any, args?: any): any {
        const min = Math.floor(value/60);
        const secs = value - min*60
        console.log(min, secs)
      return `${min} minutes ${secs} seconds`;
    }
  
  }