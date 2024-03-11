import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})

export class FavoriteComponent {
  isFavorite: boolean = false;

    onClick(){
      this.isFavorite= !this.isFavorite;
    }
}