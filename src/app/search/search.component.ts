import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from '../models/placeList.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  theSearchText: string = " ";
  errorMessge: string = "";
  list: Place[] = [];
  constructor( private router: Router) { }
  ngOnInit(): void {
  }
}


