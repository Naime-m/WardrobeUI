import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GarmentService } from '../services/garment.service';

@Component({
  selector: 'app-garments-create',
  templateUrl: './garments-create.component.html',
  styleUrls: ['./garments-create.component.css']
})
export class GarmentsCreateComponent {

  garment: any = {};

 constructor(private garmentService: GarmentService,
  private router: Router) {}

 createGarment() {
  this.garmentService.onPostGarment(this.garment).subscribe(
    response => {
      this.router.navigate(['/index']);
    }
  )
 } 
}
