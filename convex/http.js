"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./auth");
var router_1 = require("./router");
var http = router_1.default;
auth_1.auth.addHttpRoutes(http);
exports.default = http;
