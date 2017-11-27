import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GetJerseyService {

  constructor(private http:Http) { }

  getJersey(id:number){
    let url ="http://localhost:8181/jersey/" + id;
    let headers = new Headers ({
        'content-type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
