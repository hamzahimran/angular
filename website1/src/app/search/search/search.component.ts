import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
SearchName:string;
//response:any;
items:Array<any>;

  constructor(private response: ServerService) {}

  ngOnInit() {
  }
  search()
  {
   this.response.getServer(this.SearchName).subscribe((response)=>{
     this.items=response.results.artistmatches.artist;
     console.log(this.items);
   }
   );
  }
}