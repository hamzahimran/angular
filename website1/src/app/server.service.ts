import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {


  constructor(private http:HttpClient) {
   }

  getServer(x):Observable<any> {
     return this.http.get('//ws.audioscrobbler.com/2.0/?method=artist.search&artist='+
     x+'&api_key=ccadc578d97d6a6e2596c21d4face528&format=json');
  }
}
