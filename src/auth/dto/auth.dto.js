"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var AuthDto = /** @class */ (function () {
    function AuthDto() {
    }
    AuthDto._OPENAPI_METADATA_FACTORY = function () {
        return { email: { required: true, type: function () { return String; } }, password: { required: true, type: function () { return String; }, pattern: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, minLength: 6, maxLength: 32 }, hashedRt: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, class_validator_1.IsString)()
    ], AuthDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(6),
        (0, class_validator_1.MaxLength)(32),
        (0, class_validator_1.Matches)(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'Password is too week!'
        })
    ], AuthDto.prototype, "password");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], AuthDto.prototype, "hashedRt");
    return AuthDto;
}());
exports.AuthDto = AuthDto;
