import { Component } from '@angular/core';
import { Customer, Account, PrimeAccount } from './model/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstapp';
  account1: Account = new Account(25000);
  customer1: Customer = new Customer(1, 'prakhar', this.account1);

  account2: Account = new Account(35000);
  customer2: Customer = new Customer(2, 'mukul', this.account2);

  primeAccount1: PrimeAccount = new PrimeAccount(45000, 350);
  customer3: Customer = new Customer(3, 'bhuratna', this.primeAccount1);

  primeAccount2: PrimeAccount = new PrimeAccount(60000, 250);
  customer4: Customer = new Customer(4, 'aditya', this.primeAccount2);

  customerDetails: any = [
    this.customer1,
    this.customer2,
    this.customer3,
    this.customer4,
  ];
}
