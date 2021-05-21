import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmDuration'
})
export class FilmDurationPipe implements PipeTransform {

  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let miniutes = value % 60;
    return hours + 'h' + (miniutes > 0 ? miniutes : '');
  }

}
