import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export interface Account{
    id: string;
    dateCreated: Date;
    accountType: string;
    ownerId?: string;
}



