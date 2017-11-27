import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GetJerseyListService {

  constructor(private http:Http) { }

  getJerseyList(){
    let url ="http://localhost:8181/jersey/jerseyList";
    let headers = new Headers ({
        'content-type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
