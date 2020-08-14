class Customer
{
   

    constructor(private _firstName:string,private _lastName:string)
    {
        
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

console.log("First Name: "+myCustomer.firstName);
console.log("Last Name: "+myCustomer.lastName);







