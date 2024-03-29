import { Component, Input } from '@angular/core';
import Membre from '../../models/membre.model';
import { MembreService } from '../../services/membre.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

type Action = "create" | "update";

@Component({
  selector: 'app-membre-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './membre-form.component.html',
  styleUrl: './membre-form.component.css'
})

export class MembreFormComponent {
  @Input({required : true}) action: Action;
  @Input() formTitle :string;
  @Input() membre : Membre = {
    id : 0,
    nom : "",
    email : ""
  };

  constructor(private membreService : MembreService, private router: Router){}

  createMembre(){
    this.membreService.createMembre(this.membre);
  }

  updateMembre(){
    this.membreService.updateMembre(this.membre);
  }

  submit(){
    switch(this.action){
      case 'create':
        this.createMembre();
        break;
      case 'update':
        this.updateMembre();
        break;
    }

    this.membre = {
      id : 0,
      nom : "",
      email : ""
    };
    this.back();
  }

  back(){
    this.router.navigate(["/"]);
  }
}
