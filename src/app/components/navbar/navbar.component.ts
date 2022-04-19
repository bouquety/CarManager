import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo:any = "/src/assets/Panda bear silhouette Logo design.png"

  constructor() { }

  ngOnInit(): void {
  }

}
