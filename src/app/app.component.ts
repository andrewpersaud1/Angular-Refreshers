import { Component } from '@angular/core';
import { FavoriteChagedEventArgs } from './favorite/favorite.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 post = {
  title: "Title",
  isFavorite:true
 }

 onFavoriteChanged(eventArgs: FavoriteChagedEventArgs){
  console.log("Favorite Changed: ", eventArgs);
 }
}
