"use strict";
exports.__esModule = true;
exports.GetCurrentUser = void 0;
var common_1 = require("@nestjs/common");
exports.GetCurrentUser = (0, common_1.createParamDecorator)(function (data, context) {
    var request = context.switchToHttp().getRequest();
    if (!data)
        return request.user;
    return request.user[data];
});
