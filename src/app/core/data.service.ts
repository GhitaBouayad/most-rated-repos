import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

  BASE_URL = `https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc`

    constructor(private http: HttpClient) { }

    getRepos() : Observable<any> {
      return this.http.get<any[]>(this.BASE_URL)
      .pipe(
        catchError(this.handleError)
      );
    }

    getReposByPage(page: number = 1) : Observable<any> {
      return this.http.get<any[]>(this.BASE_URL + `&page=${page.toString()}&per_page=30`)
      .pipe(
        catchError(this.handleError)
      );
    }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}
