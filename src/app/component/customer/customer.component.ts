import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Posts } from '../../../_model/posts';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  constructor(private service: MasterService) {}
  postdata!: Posts[];
  ngOnInit(): void {
    this.loadInitialData();
  }
  loadInitialData() {
    this.service.getall().subscribe((item) => {
      this.postdata = item;
      console.log('inital', this.postdata);
    });
  }
}
