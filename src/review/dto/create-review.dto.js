"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateReviewDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateReviewDto = /** @class */ (function () {
    function CreateReviewDto() {
    }
    CreateReviewDto._OPENAPI_METADATA_FACTORY = function () {
        return { reviewer: { required: true, type: function () { return String; } }, description: { required: true, type: function () { return String; } }, rating: { required: true, type: function () { return Number; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Reviewer Name' }),
        (0, class_validator_1.IsString)()
    ], CreateReviewDto.prototype, "reviewer");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Review Desccription' }),
        (0, class_validator_1.IsString)()
    ], CreateReviewDto.prototype, "description");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Rating' }),
        (0, class_validator_1.IsNumber)()
    ], CreateReviewDto.prototype, "rating");
    return CreateReviewDto;
}());
exports.CreateReviewDto = CreateReviewDto;
