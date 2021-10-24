import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(private httpClient: HttpClient) {  }

  loadData(): Observable<any> {
    return  this.httpClient.get('https://jsonplaceholder.typicode.com/todos')
  }

  searchSomeData(): Observable<any> {
    return  this.httpClient.get('https://jsonplaceholder.typicode.com/albums')
  }
}
