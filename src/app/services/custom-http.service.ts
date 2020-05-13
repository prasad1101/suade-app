import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private http: HttpClient) { }

  get(url, query?) {
    return this.http.get(`${url}${this.buildQuery(query)}`);
  }

  buildQuery(query?: Object) {
    if (!query) return ""
    return "?" + (Object.keys(query).map(key => key + '=' + query[key]).join('&'))
  }

}
