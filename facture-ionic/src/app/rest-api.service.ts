import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getFacture(){
    return  this.http.get(environment.apiUrl+'apiallFacture').pipe(response => response);
  }

  
}
