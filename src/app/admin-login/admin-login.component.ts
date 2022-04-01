import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const password: string = "admin";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminPassword: string = "";

  constructor(
    private router: Router
  ) { }

  clicked(): void {
    if(this.adminPassword === password) {
      this.router.navigateByUrl("/admin");
    }
  }

  ngOnInit(): void {
  }

}
