"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeedService = void 0;
var common_1 = require("@nestjs/common");
var rss_parser_1 = require("rss-parser");
var FeedService = /** @class */ (function () {
    function FeedService() {
    }
    FeedService.prototype.findAll = function () {
        var rssParser = new rss_parser_1["default"]();
        return rssParser.parseURL('https://blockworks.co/feed');
    };
    FeedService = __decorate([
        (0, common_1.Injectable)()
    ], FeedService);
    return FeedService;
}());
exports.FeedService = FeedService;
