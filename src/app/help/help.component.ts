import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  errors: any = {
    1: "A bad error",
    2: "A really bad error",
    3: "The worst error"
  }
  errorMessage: string = "";
  errorCode: number = -1;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let ec = +this.route.snapshot.params["ec"];
    this.errorMessage = this.errors[ec];
    this.errorCode = ec;
  }

}
