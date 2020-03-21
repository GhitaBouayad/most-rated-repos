import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

  BASE_URL = `https://api.github.com/search/repositories?`
  
  per_page=100
  sort: string = 'stars';
  order: string = 'desc';
  created: string = 'created:%3E2017-10-22'
  lastPageNumber: number =0;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getRepos() : Observable<any> {
    let lastPageURL: string; 
    return this.http.get<any[]>(this.BASE_URL + `&q=${this.created}` + `&sort=${this.sort}` + `&order=${this.order}` + `&per_page=${this.per_page}` ,{ observe: 'response' })
    .pipe(
      tap(res => {
        const Link = this.parse_link_header(res.headers.get('Link'))
        lastPageURL = Link["last"]
        let url = new URL(lastPageURL);
        let lastPageNumber = url.searchParams.get("page")
        console.log('LAST PAGE : ' + lastPageNumber);
      }));
    }

    getLastPageNumber(){
      return this.lastPageNumber
    }

    //catchError(this.handleError)

    getReposByPage(page) : Observable<any> {
        return this.http.get<any[]>(this.BASE_URL + `&q=${this.created}` + `&sort=${this.sort}` + `&order=${this.order}` +`&page=${page.toString()}`+ `&per_page=${this.per_page}`)
        .pipe(
          catchError(this.handleError))              
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

    parse_link_header(header) {
      if (header.length == 0) {
        return ;
      }
  
      let parts = header.split(',');
      var links = {};
      parts.forEach( p => {
        let section = p.split(';');
        var url = section[0].replace(/<(.*)>/, '$1').trim();
        var name = section[1].replace(/rel="(.*)"/, '$1').trim();
        links[name] = url;
  
      });
      return links;
    } 

}
