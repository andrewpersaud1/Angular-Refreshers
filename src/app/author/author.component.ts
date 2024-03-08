import { Component } from '@angular/core';
import { AuthorsService } from '../author.service';

@Component({
  selector: 'author',
  templateUrl:'./author.component.html',
  styleUrls:['./author.component.css']
})

export class AuthorComponent {
  authors;
  constructor(service:AuthorsService){
      this.authors = service.getAuthors();
  }

}
