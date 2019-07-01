import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interface';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Customers';
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers);
    // this.people = [
    //   {id: 1, name: 'John Doe', city: 'Phoenix', orderTotal: 9.9, customerSince: new Date(2014, 7, 10)},
    //   {id: 1, name: 'John Michael', city: 'Chandler', orderTotal: 11, customerSince: new Date(2017, 7, 10)},
    //   {id: 1, name: 'Jim Jones', city: 'Seattle', orderTotal: 9.5, customerSince: new Date(2018, 8, 10)},
    //   {id: 1, name: 'Michel Thomas', city: 'New York', orderTotal: 599.9, customerSince: new Date(2014, 9, 10)}
    // ]
  }

}
