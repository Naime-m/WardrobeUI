import { Component, OnInit } from '@angular/core';
import { Garment } from '../models/garment';
import { GarmentService } from '../services/garment.service';

@Component({
  selector: 'app-garments',
  templateUrl: './garments.component.html',
  styleUrls: ['./garments.component.css']
})
export class GarmentsComponent implements OnInit {

  ngOnInit(): void {
    this.getAllGarments();
  }

  garments: Garment[] = [];

constructor(private garmentService: GarmentService) {}

getAllGarments() {
  this.garmentService.onGetAllGarments().subscribe(
    response => {
      this.garments = response;
    }
  )
}

deleteGarment(id: any) {
  if(window.confirm('Are you sure you want to delete this?')) {
    this.garmentService.onDeleteGarment(id).subscribe(
      response => {
        this.getAllGarments();
      }
    )
  }
}
}
