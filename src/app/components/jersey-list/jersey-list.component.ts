import { Component, OnInit } from '@angular/core';
import { Jersey } from '../../models/jersey';
import { Router } from '@angular/router';
import { LoginService } from ' ../../services/login.service';
import { GetJerseyListService } from '../../services/get-jersey-list.service';
import { RemoveJerseyService } from '../../services/remove-jersey.service';

import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-jersey-list',
  templateUrl: './jersey-list.component.html',
  styleUrls: ['./jersey-list.component.css']
})
export class JerseyListComponent implements OnInit {
  private selectedJersey: Jersey;
  private checked: boolean;
  private jerseyList: Jersey[];
  private allChecked: boolean;
  private removeJerseyList: Jersey[] = new Array();

  constructor(
    private getJerseyListService: GetJerseyListService,
    private removeJerseyService: RemoveJerseyService
    private router:Router,
    private dialog: MatDialog
  ) { }

  onSelect(jersey:Jersey){
    this.selectedJersey=jersey;
    this.router.navigate(['/viewJersey', this.selectedJersey.id]);
  }

  openDialog(jersey: Jersey) {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if(result =="yes"){
          this.removeJerseyService.sendJersey(jersey.id).subscribe(
            res => {
              console.log(res);
              this.getJerseyList();
            },
            err => {
              console.log(err);
            }
          )
        }
      }
    )
  }

  getJerseyList() {
    this.getJerseyListService.getJerseyList().subscribe(
      res => {
        console.log(res.json());
        this.jerseyList=res.json();
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getJerseyList();
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogResultExampleDialog>) {}
}
