"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReviewSchema = exports.Review = void 0;
var openapi = require("@nestjs/swagger");
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Review = /** @class */ (function (_super) {
    __extends(Review, _super);
    function Review() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Review._OPENAPI_METADATA_FACTORY = function () {
        return { reviewer: { required: true, type: function () { return String; } }, description: { required: true, type: function () { return String; } }, rating: { required: true, type: function () { return Number; } }, createdAt: { required: true, type: function () { return Date; } }, updatedAt: { required: true, type: function () { return Date; } } };
    };
    __decorate([
        (0, mongoose_1.Prop)()
    ], Review.prototype, "reviewer");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Review.prototype, "description");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Review.prototype, "rating");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Review.prototype, "createdAt");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Review.prototype, "updatedAt");
    Review = __decorate([
        (0, mongoose_1.Schema)()
    ], Review);
    return Review;
}(mongoose_2.Document));
exports.Review = Review;
exports.ReviewSchema = mongoose_1.SchemaFactory.createForClass(Review);
