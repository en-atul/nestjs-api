"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateSolutionDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateSolutionDto = /** @class */ (function () {
    function CreateSolutionDto() {
    }
    CreateSolutionDto._OPENAPI_METADATA_FACTORY = function () {
        return { title: { required: true, type: function () { return String; } }, salary: { required: true, type: function () { return Number; } }, location: { required: true, type: function () { return String; } }, description: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Job title' }),
        (0, class_validator_1.IsString)()
    ], CreateSolutionDto.prototype, "title");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'salary' }),
        (0, class_validator_1.IsNumber)()
    ], CreateSolutionDto.prototype, "salary");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Location' }),
        (0, class_validator_1.IsString)()
    ], CreateSolutionDto.prototype, "location");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Job Descriptionn' }),
        (0, class_validator_1.IsString)()
    ], CreateSolutionDto.prototype, "description");
    return CreateSolutionDto;
}());
exports.CreateSolutionDto = CreateSolutionDto;
