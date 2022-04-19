import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http"
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-deletecar',
  templateUrl: './deletecar.component.html',
  styleUrls: ['./deletecar.component.css']
})
export class DeletecarComponent implements OnInit {
  car!: Car;
  private BASE_URL = "http://localhost:3000/"

  constructor(private httpClient : HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.httpClient.delete<Car>(`${this.BASE_URL}cars/${id}`)
    .subscribe({
      next: car => {
        this.car = car;
      },
      error : err => {
        console.log(err)
      },
      complete:() => {
        console.log('completed');
      }
    })
  }

}
