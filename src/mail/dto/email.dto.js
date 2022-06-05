"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactUsDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var ContactUsDto = /** @class */ (function () {
    function ContactUsDto() {
    }
    ContactUsDto._OPENAPI_METADATA_FACTORY = function () {
        return { message: { required: true, type: function () { return String; } }, name: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } }, company: { required: true, type: function () { return String; } }, phoneNumber: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Message body' }),
        (0, class_validator_1.IsString)()
    ], ContactUsDto.prototype, "message");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Name' }),
        (0, class_validator_1.IsString)()
    ], ContactUsDto.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Email' }),
        (0, class_validator_1.IsString)()
    ], ContactUsDto.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Company Name' }),
        (0, class_validator_1.IsString)()
    ], ContactUsDto.prototype, "company");
    __decorate([
        (0, swagger_1.ApiProperty)({ description: 'Phone Number' }),
        (0, class_validator_1.IsString)()
    ], ContactUsDto.prototype, "phoneNumber");
    return ContactUsDto;
}());
exports.ContactUsDto = ContactUsDto;
