import { Pipe, PipeTransform } from '@angular/core';
import { TemporalDbService } from '../services/temporal-db.service';
import { CityTable } from '../@types/types';

@Pipe({
  name: 'visited',
  pure: false
})
export class VisitedPipe implements PipeTransform {

  constructor(private db: TemporalDbService) {}

  transform(city: CityTable): boolean {
    return this.db.isCityVisited(city.id);
  }

}
