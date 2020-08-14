class Customer{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string)
    {
        this.firstName=firstName;
        this.lastName=lastName;

    }
}

let myCustomer=new Customer("fokhrul Islam","Pervez");
// myCustomer.firstName="fokhrul Islam";
// myCustomer.lastName="Pervez";

console.log(" First Name: "+myCustomer.firstName +"\n"+"Last Name: "+myCustomer.lastName);