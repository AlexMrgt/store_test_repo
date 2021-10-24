import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getProjectsAction} from "./store/actions/projects-data";
import {selectProjects} from "./store/selectors/projects-data/select-projects.selector";
import {Observable} from "rxjs";
import {selectSearchResult} from "./store/selectors/search/select-search-data.selector";
import {SearchResultDataInterface} from "./store/actions/search";
import {ProjectItemInterface} from "./store/interfaces/project-item.interface";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public isOpenAddProjectPopup: boolean = false;

  public projects$:Observable<ProjectItemInterface[]>  =  this.store$.pipe(select(selectProjects));

  public searchResult$: Observable<SearchResultDataInterface[]>  = this.store$.pipe(select(selectSearchResult))

  constructor(private store$: Store,) { }

  ngOnInit(): void {
    this.store$.dispatch(getProjectsAction());
  }

  handleOpenAddProjectPopup(){
    console.log('открываю попап');
    this.isOpenAddProjectPopup = true;
  }

  handleCloseAddProjectPopup(){
    console.log('закрываю попап');
    this.isOpenAddProjectPopup = false;
  }




}
