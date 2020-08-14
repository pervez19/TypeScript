import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle } from "./Rectangle";


let myCircle=new Circle(3,4,44);
let myShape=new Shape(21,34);
let myRectangle=new Rectangle(11,22,3.4,9.8);

let theShape: Shape[]=[];
theShape.push(myShape);
theShape.push(myRectangle);
theShape.push(myCircle);

for(let tempShap of theShape)
{
    console.log(tempShap.getInfo());
}