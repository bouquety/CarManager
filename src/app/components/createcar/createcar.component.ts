import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { CreateCar } from 'src/app/models/create-car';
import { CarserviceService } from 'src/app/services/carservice.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css']
})
export class CreatecarComponent implements OnInit {
  submitted: boolean = false;
  car?: Car;
  etat!: boolean;

  createCarForm: FormGroup = this.fb.group({
    title: [this.car?.title, [Validators.required]],
    address: [this.car?.address, [Validators.required]],
    brand: [this.car?.brand, [Validators.required]],
    model: [this.car?.model, [Validators.required]],
    model_year: [this.car?.model_year, [Validators.required]],
    issuance: [this.car?.issuance, [Validators.required]],
    mileage: [this.car?.mileage, [Validators.required]],
    fuel: [this.car?.fuel, [Validators.required]],
    color: [this.car?.color, [Validators.required]],
    numbers_doors: [this.car?.numbers_doors, [Validators.required]],
    horse_power: [this.car?.horse_power, [Validators.required]],
    price: [this.car?.price, [Validators.required]],
    pictures: [this.car?.pictures, [Validators.required]],
    sold: [this.car?.sold, [Validators.required]],
  });

  constructor(private carService: CarserviceService, private fb:FormBuilder, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;

  

    if(this.createCarForm.value.sold == "Vendu"){
      this.etat = true
    }
    else{
      this.etat = false
    }


    let car: CreateCar = {
      title: this.createCarForm.value.title,
      address: this.createCarForm.value.address,
      brand: this.createCarForm.value.brand,
      model: this.createCarForm.value.model,
      model_year: this.createCarForm.value.model_year,
      issuance: this.createCarForm.value.issuance,
      mileage: this.createCarForm.value.mileage,
      fuel: this.createCarForm.value.fuel,
      color: this.createCarForm.value.color,
      numbers_doors: this.createCarForm.value.numbers_doors,
      horse_power: this.createCarForm.value.horse_power,
      price: this.createCarForm.value.price,
      pictures: this.createCarForm.value.pictures,
      sold: this.etat,
    };

    this.carService.createCar(car)
      .subscribe({
        next: ok => {
          this.route.navigate(['/'])
        }
      });
  }



}
