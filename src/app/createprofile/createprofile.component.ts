import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {
  private dialogConfig;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {

    // just playing around

this.dialogConfig = {
  height: '200px',
  width: '400px',
  disableClose: true,
  data: { }
}

  }






}
