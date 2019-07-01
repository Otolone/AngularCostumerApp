import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interface';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';
    constructor(private http: HttpClient) { }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                catchError(this.handleError)
            );
    }
    getCustomer(id: number): Observable<ICustomer> {
      return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
        .pipe(
          map(customers => {
            const customer = customers.filter((cust: ICustomer) => cust.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    getOrders(id: number): Observable<IOrder[]> {
      const url = `${this.baseUrl + 'orders.json'}`;

      return this.http.get<IOrder[]>(url)
        .pipe(
          map(orders => {
            const custOrders = orders.filter((order: IOrder) => order.customerId === id);
            console.log(custOrders.toLocaleString());
            return custOrders;
          }),
          catchError(this.handleError)
        );
    }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}