import { Component, OnInit } from '@angular/core';
import { Jersey } from '../../models/jersey';
import { AddJerseyService } from '../../services/add-jersey.service';

@Component({
  selector: 'app-add-new-jersey',
  templateUrl: './add-new-jersey.component.html',
  styleUrls: ['./add-new-jersey.component.css']
})
export class AddNewJerseyComponent implements OnInit {

  private newJersey:  Jersey = new Jersey();
  private jerseyAdded: boolean;

  constructor(private addJerseyService: AddJerseyService) { }

  onSubmit() {
    this.addJerseyService.sendJersey(this.newJersey).subscribe(
      res => {
        this.jerseyAdded=true;
        this.newJersey = new Jersey();
        this.newJersey.shippingWeight="short";
        this.newJersey.type="replica";
        this.newJersey.active=true;
        this.newJersey.season="17/18";
      }, error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.jerseyAdded=false;
    this.newJersey.shippingWeight="short";
    this.newJersey.type="replica";
    this.newJersey.active=true;
    this.newJersey.season="17/18";
  }

}
