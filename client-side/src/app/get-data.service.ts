import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  url = 'https://mock-api--1.herokuapp.com';
  constructor(private http: HttpClient) { }
  getArticles(): Observable<any> {
    return this.http.get(`${this.url}/articles`)
  }
  getBlogDetails(id:Number):Observable<any>{
    return this.http.get(`${this.url}/articles/${id}`)
  }
  getReviews():Observable<any>{
    return this.http.get(`${this.url}/reviews`)
  }
}
