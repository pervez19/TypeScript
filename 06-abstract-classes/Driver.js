"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(3, 4, 44);
var myRectangle = new Rectangle_1.Rectangle(11, 22, 3.4, 9.8);
var theShape = [];
theShape.push(myRectangle);
theShape.push(myCircle);
for (var _i = 0, theShape_1 = theShape; _i < theShape_1.length; _i++) {
    var tempShap = theShape_1[_i];
    console.log(tempShap.getInfo());
    console.log(tempShap.calculateArea());
    console.log();
}
