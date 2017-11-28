import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Jersey } from '../models/jersey';

@Injectable()
export class RemoveJerseyService {

  constructor(private http:Http) { }

  sendJersey(jerseyId: number){
    let url ="http://localhost:8181/jersey/remove";
    let headers = new Headers ({
        'content-type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, jerseyId, {headers: headers});
  }

}
