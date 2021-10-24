import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {select, Store} from "@ngrx/store";
import {getSearchResultAction, SearchResultDataInterface} from "../../store/actions/search";
import {Observable} from "rxjs";
import {selectSearchResult} from "../../store/selectors/search/select-search-data.selector";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private store$:Store,
              ) {

    this.searchForm = this.fb.group({
      search: ['',]
    });


   }

  ngOnInit(): void {


  }

  handleClick(){
    this.store$.dispatch(getSearchResultAction());
  }


}
