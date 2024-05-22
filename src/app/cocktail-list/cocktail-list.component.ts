import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {
  cocktails: any[] = [];

  constructor(private cocktailService: CocktailService) {};

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails()
  }
}
