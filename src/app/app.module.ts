import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CarComponent } from './components/car/car.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CreatecarComponent } from './components/createcar/createcar.component';
import { DeletecarComponent } from './components/deletecar/deletecar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortByPricePipe } from './components/accueil/sort-by-price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    CarComponent,
    AccueilComponent,
    CardetailComponent,
    CreatecarComponent,
    DeletecarComponent,
    SortByPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
