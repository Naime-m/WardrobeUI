import { Component, OnInit } from '@angular/core';
import { GarmentService } from '../services/garment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Garment } from '../models/garment';

@Component({
  selector: 'app-garments-edit',
  templateUrl: './garments-edit.component.html',
  styleUrls: ['./garments-edit.component.css']
})
export class GarmentsEditComponent implements OnInit {

  garment: any = {};

  constructor(
    private garmentService: GarmentService,
    private actRoute: ActivatedRoute) {}

  id = this.actRoute.snapshot.params['id'];

 ngOnInit(): void {
  this.garmentService.onGetGarment(this.id).subscribe(
    response => {
      this.garment = response;
    }
  )
 }
}
