import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarserviceService } from 'src/app/services/carservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  cars : Car[] = [];
  sortByPrice: string = "ASC";
  constructor(private carService: CarserviceService) { }

  ngOnInit(): void {
    this.carService.getCars()
    .subscribe({
      next: cars => {
        this.cars = cars;
      },
      error : err => {
        console.log(err)
      },
      complete:() => {
        console.log('completed');
      }
    })

  }

  sortOrder() {
    this.sortByPrice = this.sortByPrice === "ASC" ? "DESC" : "ASC";
  }

 
}
