import { Component } from '@angular/core';
import { FormationFormComponent } from '../formation-form/formation-form.component';
import { FormationsListComponent } from '../formations-list/formations-list.component';
import { MembreListComponent } from '../membre-list/membre-list.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [NgbNavModule, FormationsListComponent, FormationFormComponent, MembreListComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {

}
