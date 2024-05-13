import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../../_model/posts';
import { Customer } from '../../_model/Customer';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getall() {
    return this.http.get<Posts[]>('http://localhost:3000/posts');
  }
  GetAllManaul() {
    return this.http.get('https://localhost:7219/api/tblManual/tblManualList');
  }
}
