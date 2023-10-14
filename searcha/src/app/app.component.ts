import { Component, EventEmitter, Output } from '@angular/core';
import { ListItemsComponent } from './list-items/list-items.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searcha';
//   textEntered:any;
// @Output() public clickSearchButton = new EventEmitter();
//   search(searchItem:any){
// this.clickSearchButton.emit(searchItem);
//   }
}
