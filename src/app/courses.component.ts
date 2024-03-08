import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector:'courses',
  template: `
        <img [src]="imageUrl" />
        <table>
          <tr>
            <td [attr.colspan]="colspan"></td>
          <tr>
        </table>
  `
})
export class CoursesComponent{
  imageUrl="";
  colspan=2;
}
