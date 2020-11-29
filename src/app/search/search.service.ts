import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Place } from '../models/placeList.model';
import { Observable } from 'rxjs';
import { Popular } from '../models/popular.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {



  constructor(private http: HttpClient) { }



  GetPlaces(theSearchText: string): Observable<Place[]> {
    return this.http.get<Place[]>("http://localhost:3000/api/search?searchText=" + theSearchText)
  }

  GetPopularPlace(): Observable<Popular[]> {
    return this.http.get<Popular[]>("http://localhost:3000/api/popular")
  }
}





