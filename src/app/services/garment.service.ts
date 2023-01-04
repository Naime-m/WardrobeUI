import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Garment } from '../models/garment';

@Injectable({
  providedIn: 'root'
})
export class GarmentService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://localhost:7056/api/garment/';

  onGetAllGarments(): Observable<Garment[]> {
    return this.http.get<Garment[]>(this.apiUrl);
  }

  onGetGarment(id: any): Observable<Garment> {
    return this.http.get<Garment>(this.apiUrl + id);
  }

  onPutGarment(garment: Garment): Observable<Garment> {
    return this.http.put<Garment>(this.apiUrl + '?id=' + garment.id, garment);
  }

  onPostGarment(garment: Garment): Observable<Garment> {
    return this.http.post<Garment>(this.apiUrl, garment);
  }
}
