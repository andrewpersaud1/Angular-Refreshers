import { Component, OnInit , Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],


})

export class FavoriteComponent {

 @Input('is-favorite') isSelected;
 @Output('change') click= new EventEmitter();

    onClick(){
      this.isSelected= !this.isSelected;
      this.click.emit({newValue: this.isSelected});
    }
}

export interface FavoriteChagedEventArgs{
  newValue: boolean
}
