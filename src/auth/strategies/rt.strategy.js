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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RtStrategy = void 0;
var passport_1 = require("@nestjs/passport");
var passport_jwt_1 = require("passport-jwt");
var common_1 = require("@nestjs/common");
var RtStrategy = /** @class */ (function (_super) {
    __extends(RtStrategy, _super);
    function RtStrategy(config) {
        return _super.call(this, {
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('RT_SECRET'),
            passReqToCallback: true
        }) || this;
    }
    RtStrategy.prototype.validate = function (req, payload) {
        var _a;
        var refreshToken = (_a = req === null || req === void 0 ? void 0 : req.get('authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer', '').trim();
        if (!refreshToken)
            throw new common_1.ForbiddenException('Refresh token malformed');
        return __assign(__assign({}, payload), { refreshToken: refreshToken });
    };
    RtStrategy = __decorate([
        (0, common_1.Injectable)()
    ], RtStrategy);
    return RtStrategy;
}((0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh')));
exports.RtStrategy = RtStrategy;
