import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { CreateCar } from '../models/create-car';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };
  
  
  
  private BASE_URL = "http://localhost:3000/"
  handleError: any;


  constructor(private http : HttpClient) { }

  getCars() : Observable<Car[]>{
    return this.http.get<Car[]>(`${this.BASE_URL}cars`)
  }

  createCar(car: CreateCar): Observable<Car[]> {
    console.log("createcar")
    return this.http.post<Car[]>(`${this.BASE_URL}cars`, car, this.httpOptions)
  }


 

}
