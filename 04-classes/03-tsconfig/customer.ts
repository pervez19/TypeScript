class Customer
{
    private _firstName:string;
    private _lastName:string;

    constructor(_firstName:string,_lastName:string)
    {
        this._firstName=this.firstName;
        this._lastName=this.lastName;

    }
    public set firstName(firstName:string)
    {
        this._firstName=firstName;
    }
    public get firstName():string
    {
        return this._firstName;
    }

    public set lastName(lastName:string)
    {
        this._lastName=lastName;
    }
    public get lastName():string
    {
        return this._lastName;
    }

}


let myCustomer=new Customer("Fokhrul","Pervez");
myCustomer.firstName="Fokhrul";
myCustomer.lastName="Pervez";

console.log("First Name: "+myCustomer.firstName);
console.log("Last Name: "+myCustomer.lastName);







