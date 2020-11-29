import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../search/search.service';
import { Place } from '../models/placeList.model';
import { Popular } from '../models/popular.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements OnInit {
  listOfPlaces: Place[] = [];
  searchText: string = '';
  placesNum: number = 0;
  popularPlace: Popular[] = []

  constructor(private router: Router, private service: SearchService, private activRout: ActivatedRoute) { }

  ngOnInit(): void {
    // get the serch's text from the url
    this.searchText += this.activRout.snapshot.paramMap.get('searchText');
    // get the places result from the server
    this.service.GetPlaces(this.searchText).subscribe(places => {
      this.listOfPlaces = places;
      this.placesNum = this.listOfPlaces.length;
      // cut the country from the adress
      this.listOfPlaces.forEach(place => {
        place.adress = place.adress.replace(', ישראל', ' ')
      });
    });
    //get the popular search from the server
    this.service.GetPopularPlace().subscribe(popularPlace => {
      this.popularPlace = popularPlace;
    });
  }
  //go back to search
  onEnd() {
    this.router.navigate(['/search']);
  }
}
