import { Component, OnInit } from '@angular/core';
import { Jersey } from '../../models/jersey';
import { AddJerseyService } from '../../services/add-jersey.service';
import { UploadImageService } from '../../services/upload-image.service';

@Component({
  selector: 'app-add-new-jersey',
  templateUrl: './add-new-jersey.component.html',
  styleUrls: ['./add-new-jersey.component.css']
})
export class AddNewJerseyComponent implements OnInit {

  private newJersey: Jersey = new Jersey();
  private jerseyAdded: boolean;

  constructor(private addJerseyService: AddJerseyService, private uploadImageService: UploadImageService) { }

  onSubmit() {
    this.addJerseyService.sendJersey(this.newJersey).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        this.jerseyAdded=true;
        this.newJersey = new Jersey();
        this.newJersey.shippingWeight=0.3;
        this.newJersey.type="Replica";
        this.newJersey.active=true;
        this.newJersey.season="17/18";
      }, error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.jerseyAdded=false;
    this.newJersey.shippingWeight=0.3;
    this.newJersey.type="Replica";
    this.newJersey.active=true;
    this.newJersey.season="17/18";
  }

}
