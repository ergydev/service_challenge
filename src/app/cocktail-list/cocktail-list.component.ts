import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { NgFor } from '@angular/common';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];

  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe(cocktailsFromJSON => {
      this.cocktails = cocktailsFromJSON;
    });
  }
}
