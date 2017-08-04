
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: __moduleName,
    selector: 'app-customers',
    templateUrl: 'customers.component.html'
})

export class CustomersComponent implements OnInit {
    customers: any[];

    constructor(private _customerService: CustomerService) { }

    ngOnInit() {
        this._customerService.getCustomers_RxObservable()
        .subscribe(
            (customers) => {
                this.customers = customers;
            },
            (err) => { 
                console.log(err); 
            }
        );
        //Promise to array
        /*this._customerService.getCustomers()
        .then((customers) => {
            this.customers = customers;
        })
        .catch((err) => {
            console.log(err);
        });*/

        //Promise<any>
        /*this.customers = this._customerService.getCustomers()
        .catch((err) => {
            console.log(err);
        });*/

        //Rx Observable version
        /*this.customers = this._customerService.getCustomers()
        .catch((err) => {
            console.log(err);
            return Observable.of(true);
        });*/
     }
}