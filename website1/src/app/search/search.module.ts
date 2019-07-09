import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServerService } from '../server.service';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [SearchComponent],
  exports:[SearchComponent],
  providers:[ServerService]
})


export class SearchModule { }
