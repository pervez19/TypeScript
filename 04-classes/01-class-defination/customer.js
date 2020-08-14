var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("fokhrul Islam", "Pervez");
// myCustomer.firstName="fokhrul Islam";
// myCustomer.lastName="Pervez";
console.log(" First Name: " + myCustomer.firstName + "\n" + "Last Name: " + myCustomer.lastName);
