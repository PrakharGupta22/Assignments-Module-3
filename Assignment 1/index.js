class Customer {
  id;
  name;
  account;

  constructor(id, name, account) {
    this.id = id;
    this.name = name;
    this.account = account;
  }

  toString() {
    return (
      "id: " +
      this.id +
      " " +
      "name: " +
      this.name +
      " " +
      "account: " +
      this.account
    );
  }
}

class Account {
  balance;

  constructor(balance) {
    this.balance = balance;
  }

  toString() {
    return "balance: " + this.balance;
  }
}

class PrimeAccount extends Account {
  supercoins;
  constructor(balance, supercoins) {
    super(balance);
    this.supercoins = supercoins;
  }

  toString() {
    return "balance: " + this.balance + " " + "supercoins: " + this.supercoins;
  }
}
let account1 = new Account(25000);
let customer1 = new Customer(1, "prakhar", account1);

let account2 = new Account(35000);
let customer2 = new Customer(2, "mukul", account2);

let primeAccount1 = new PrimeAccount(45000, 350);
let customer3 = new Customer(3, "bhuratna", primeAccount1);

let primeAccount2 = new PrimeAccount(60000, 250);
let customer4 = new Customer(4, "aditya", primeAccount2);

let customerDetails = [];
customerDetails.push(customer1);
customerDetails.push(customer2);
customerDetails.push(customer3);
customerDetails.push(customer4);

function iterate(item) {
  console.log(item.toString());
}

customerDetails.forEach(iterate);
