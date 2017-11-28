import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { Jersey } from '../../models/jersey';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { GetJerseyService } from '../../services/get-jersey.service';
import { EditJerseyService } from '../../services/edit-jersey.service';

@Component({
  selector: 'app-edit-jersey',
  templateUrl: './edit-jersey.component.html',
  styleUrls: ['./edit-jersey.component.css']
})
export class EditJerseyComponent implements OnInit {

  private jerseyId: number;
  private jersey: Jersey = new Jersey();
  private jerseyUpdated: boolean;

  constructor(
    private uploadImageService: UploadImageService,
    private editJerseyService:EditJerseyService,
    private getJerseyService: GetJerseyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit() {
    this.editJerseyService.sendJersey(this.jersey).subscribe(
      data => {
        this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id)
        this.jerseyUpdated = true;
      },
      error => console.log(error)
    )
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.jerseyId = Number.parseInt(params['id']);
    });

    this.getJerseyService.getJersey(this.jerseyId).subscribe(
      res => {
        this.jersey = res.json();
      },
      error => console.log(error)
    )
  }

}
