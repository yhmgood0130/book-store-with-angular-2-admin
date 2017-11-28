import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router} from '@angular/router';
import { GetJerseyService } from '../../services/get-jersey.service';
import { Jersey } from '../../models/jersey';

@Component({
  selector: 'app-view-jersey',
  templateUrl: './view-jersey.component.html',
  styleUrls: ['./view-jersey.component.css']
})
export class ViewJerseyComponent implements OnInit {

  private jersey:Jersey = new Jersey();
  private jerseyId: number;

  constructor(private getJerseyService:GetJerseyService, private route:ActivatedRoute, private router:Router) { }

  onSelect(jersey:Jersey) {
    this.router.navigate(['/editJersey', this.jersey.id])
     // .then(s => location.reload());
  }

  ngOnInit() {
    this.route.params.forEach((params:Params) => {
      this.jerseyId = Number.parseInt(params['id']);
    });

    this.getJerseyService.getJersey(this.jersey.id).subscribe(
      res => {
        this.jersey = res.json();
      },
      error => {
        console.log(error);
      }
    );
  }

}
