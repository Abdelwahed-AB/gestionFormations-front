import { Component } from '@angular/core';
import { MembreFormComponent } from '../membre-form/membre-form.component';

@Component({
  selector: 'app-membre-create-view',
  standalone: true,
  imports: [MembreFormComponent],
  templateUrl: './membre-create-view.component.html',
  styleUrl: './membre-create-view.component.css'
})
export class MembreCreateViewComponent {

}
