import { Component } from '@angular/core';
import { MembreFormComponent } from '../membre-form/membre-form.component';
import Membre from '../../models/membre.model';
import { MembreService } from '../../services/membre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membre-update-view',
  standalone: true,
  imports: [MembreFormComponent],
  templateUrl: './membre-update-view.component.html',
  styleUrl: './membre-update-view.component.css'
})
export class MembreUpdateViewComponent {
  membre :Membre;

  constructor(private membreService: MembreService, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params => {
      let id:number = params["id"];
      this.membreService.getMembreById(id).subscribe(membre => this.membre = membre);
    })
  }
}
