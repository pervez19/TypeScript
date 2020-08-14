import { Shape } from "./Shape";

export class Circle extends Shape
{
     
    constructor(theX:number,theY:number,private _redious: number)
    {
        super(theX,theY);
    }
    public get redious(): number {
        return this._redious;
    }
    public set redious(value: number) {
        this._redious = value;
    }

    getInfo():string
    {
        return super.getInfo()+" redious= "+this._redious;
    }
}