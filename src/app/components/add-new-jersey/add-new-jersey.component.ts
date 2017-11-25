import { Component, OnInit } from '@angular/core';
import { Jersey } from '../../models/jersey';

@Component({
  selector: 'app-add-new-jersey',
  templateUrl: './add-new-jersey.component.html',
  styleUrls: ['./add-new-jersey.component.css']
})
export class AddNewJerseyComponent implements OnInit {

  private newJersey:  Jersey = new Jersey();
  private jerseyAdded: boolean;

  constructor() { }

  ngOnInit() {
  }

}
