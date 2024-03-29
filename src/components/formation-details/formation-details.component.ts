import { Component, Input } from '@angular/core';
import Formation from '../../models/formation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../../services/formation.service';
import Membre from '../../models/membre.model';
import { MembreService } from '../../services/membre.service';
import { NgFor, NgIf } from '@angular/common';
import { InscriptionService } from '../../services/inscription.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formation-details',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './formation-details.component.html',
  styleUrl: './formation-details.component.css',
})
export class FormationDetailsComponent {
  formation: Formation;
  allMembres: Membre[];
  membres: Membre[];

  selectedMemberId :number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationService: FormationService,
    private membreService: MembreService,
    private inscriptionService: InscriptionService
  ) {}

  ngOnInit() {
    this.membreService.membresInFormation.subscribe(
      (membres) => (this.membres = membres)
    );
    this.membreService.membres.subscribe(
      (membres) => (this.allMembres = membres)
    );

    this.route.params.subscribe((params) => {
      let id = params['id'];


      this.formationService
        .getFormationByID(id)
        .subscribe((data) => (this.formation = data));

      this.membreService.getMembresByFormation(id);
      this.membreService.getAllMembres();
    });
  }

  desinscrire(membreId: number) {
    if(confirm("Etez-vous sûr?")){
      this.inscriptionService
        .deinscrire(membreId, this.formation.id)
        .subscribe(() => this.membreService.getMembresByFormation(this.formation.id));
    }
  }

  inscrire(){
    this.inscriptionService
      .inscrire(this.selectedMemberId, this.formation.id)
      .subscribe(()=> this.membreService.getMembresByFormation(this.formation.id));
  }

  back(){
    this.router.navigate(["/"]);
  }
}
