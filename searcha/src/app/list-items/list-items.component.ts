import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import {Search} from '../search';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  // @Input() public searchValue:any;
  textEntered: any;
  // items: any;
  item: Search[] = [];

  constructor(private searchServices: SearchService) {}

  ngOnInit(): void {
    this.item =this.searchServices.getItems();
  }

  search() {
    // this.clickSearchButton.emit(searchItem);
  }

  onKeyUp(a:any){
    console.log("you entered" + a);

  }
}
