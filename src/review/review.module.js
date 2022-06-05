"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReviewModule = void 0;
var common_1 = require("@nestjs/common");
var review_service_1 = require("./review.service");
var review_controller_1 = require("./review.controller");
var mongoose_1 = require("@nestjs/mongoose");
var review_entity_1 = require("./entities/review.entity");
var ReviewModule = /** @class */ (function () {
    function ReviewModule() {
    }
    ReviewModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: review_entity_1.Review.name,
                        schema: review_entity_1.ReviewSchema
                    },
                ]),
            ],
            providers: [review_service_1.ReviewService],
            controllers: [review_controller_1.ReviewController]
        })
    ], ReviewModule);
    return ReviewModule;
}());
exports.ReviewModule = ReviewModule;
