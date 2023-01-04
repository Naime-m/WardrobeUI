import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Garment } from '../models/garment';

@Injectable({
  providedIn: 'root'
})
export class GarmentService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://localhost:7056/api/';

  getAllGarments(): Observable<Garment[]> {
    return this.http.get<Garment[]>(this.apiUrl);
  }
}
