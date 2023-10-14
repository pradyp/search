import { Injectable } from '@angular/core';
import { Search } from './search';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  getItems(): Search[] {
    return [
      { name: 'pradeep', id: 9780, place: 'bombay' },
      { name: 'kumar', id: 6745, place: 'kurnool' },
      { name: 'mahesh', id: 9785, place: 'kolkata' },
    ];
  }
}
