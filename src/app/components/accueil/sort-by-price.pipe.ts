import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(cars: Car[], order: string): Car[] {
    if (order === 'DESC') {
      return cars.sort((a: Car, b: Car) => b.price - a.price);
    } else {
      return cars.sort((a: Car, b: Car) => a.price - b.price);
    }
  }

}
