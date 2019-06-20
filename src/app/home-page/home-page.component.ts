import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

export interface PeriodicElement {
id: number;
    name: string;
    dateOfBirth: number;
    address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', dateOfBirth: 12/1/2010, address: 'H'},
  {id: 2, name: 'Helium', dateOfBirth: 12/1/2010, address: 'He'},
  {id: 3, name: 'Lithium', dateOfBirth:12/1/2010, address: 'Li'},
  {id: 4, name: 'Beryllium', dateOfBirth: 12/1/2010, address: 'Be'},
  {id: 5, name: 'Boron', dateOfBirth: 12/1/2010, address: 'B'},
  {id: 6, name: 'Carbon', dateOfBirth: 12/1/2010, address: 'C'},
  {id: 7, name: 'Nitrogen', dateOfBirth: 12/1/2010, address: 'N'},
  {id: 8, name: 'Oxygen', dateOfBirth: 12/1/2010, address: 'O'},
  {id: 9, name: 'Fluorine', dateOfBirth: 12/1/2010, address: 'F'},
  {id: 10, name: 'Neon', dateOfBirth: 12/1/2010, address: 'Ne'},
  {id: 11, name: 'Soldium', dateOfBirth: 12/1/2010, address: 'Na'},
  {id: 12, name: 'Magnesium', dateOfBirth: 12/1/2010, address: 'Mg'},
  {id: 13, name: 'Aluminium', dateOfBirth:12/1/2010, address: 'Al'},
  {id: 14, name: 'Silicon', dateOfBirth: 12/1/2010, address: 'Si'},
  {id: 15, name: 'Phosphorous', dateOfBirth: 12/1/2010, address: 'P'},
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})




export class HomePageComponent implements OnInit {

  public displayedColumns = ['name', 'dateOfBirth', 'address','details',  'update', 'delete'];
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // constructor() { }

  constructor( private router: Router) { }



  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/details/${id}`;
    this.router.navigate([url]);
  }
}
