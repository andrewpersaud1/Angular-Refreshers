import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrl: './like.component.css'
})
export class LikeComponent {
  @Input('likesCount') likesCount: number = 0;
  @Input('isActive') isActive: boolean = false;

  onClick(){
    this.likesCount = (this.isActive)? -1: 1;
    this.isActive = !this.isActive;
  }
}
