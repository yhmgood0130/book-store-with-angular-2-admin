import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Jersey } from '../models/jersey';

@Injectable()
export class AddJerseyService {

  constructor(private http: Http) { }

  sendJersey(jersey: Jersey){
    console.log(jersey);
    let url ="http://localhost:8181/jersey/add";
    let headers = new Headers ({
        'content-type': 'application/json',
        'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(jersey), {headers: headers});
  }

}
