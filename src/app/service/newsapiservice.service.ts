import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private http:HttpClient) { }

  
  
  //new Api url
  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=us&apiKey=09bf547244bc44638c7c7f75499cda36";

  // tech news api

  techApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=09bf547244bc44638c7c7f75499cda36"

  // business news api

  businessApiUrl="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=09bf547244bc44638c7c7f75499cda36"

  // topHeading()
  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }

  //tech News ()

  techNews():Observable<any>{
    return this.http.get(this.techApiUrl)
  }

  // business News()

  businessNews():Observable<any>{
    return this.http.get(this.businessApiUrl)
  }

}
