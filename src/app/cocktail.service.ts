import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './models/cocktail.model';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private http = inject(HttpClient);

  constructor() { }

  getCocktails() : Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("../assets/data/cocktails.json")
  }
}
