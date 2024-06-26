import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(){
    return [
      {name: 'Margarita', price: 12, img: 'https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg'},
      {name: 'Mojito', price: 10, img: 'https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574603.jpg'},
      {name: 'Cosmopolitan', price: 15, img: 'https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg'},
      {name: 'Martini', price: 18, img: 'https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg'},
    ]
  }
}
