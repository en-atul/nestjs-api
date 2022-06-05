"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SolutionsModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var solution_entity_1 = require("./entities/solution.entity");
var solutions_controller_1 = require("./solutions.controller");
var solutions_service_1 = require("./solutions.service");
var SolutionsModule = /** @class */ (function () {
    function SolutionsModule() {
    }
    SolutionsModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: solution_entity_1.Solution.name,
                        schema: solution_entity_1.SolutionSchema
                    },
                ]),
            ],
            controllers: [solutions_controller_1.SolutionsController],
            providers: [solutions_service_1.SolutionsService]
        })
    ], SolutionsModule);
    return SolutionsModule;
}());
exports.SolutionsModule = SolutionsModule;
