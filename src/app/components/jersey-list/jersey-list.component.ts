import { Component, OnInit } from '@angular/core';
import { Jersey } from '../../models/jersey';
import { Router } from '@angular/router';
import { LoginService } from ' ../../services/login.service';
import { GetJerseyListService } from '../../services/get-jersey-list.service';

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
    private router:Router
  ) { }

  ngOnInit() {
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

}
