import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  private searchSubject = new BehaviorSubject<string>('');
  search$: Observable<string> = this.searchSubject.asObservable();

  constructor() { }

  setSearchItem(search: string) {
    this.searchSubject.next(search);
  }

  clearSearchItem(){
    this.searchSubject.next('');
  }
}
