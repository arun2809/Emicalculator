import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http:HttpClient)
   {
    
    }

EmiCalculator(loanvalue,monthvalue)
{
  return this._http.get('https://ftl-frontend-test.herokuapp.com/interest?amount='+loanvalue+'&numMonths='+monthvalue+'')
}
}
