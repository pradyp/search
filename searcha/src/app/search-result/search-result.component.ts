import { Component } from '@angular/core';
import { ListItemsComponent } from '../list-items/list-items.component';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent {

  constructor(private listcomp:ListItemsComponent){

  }
  itemRecieved(recieved:any){
    // this.listcomp.filterItems(recieved);
  }
}
