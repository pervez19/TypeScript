"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(theX, theY, _redious) {
        var _this = _super.call(this, theX, theY) || this;
        _this._redious = _redious;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "redious", {
        get: function () {
            return this._redious;
        },
        set: function (value) {
            this._redious = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + " redious= " + this._redious;
    };
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this._redious, 2);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
