"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Protocol = void 0;
const mikro_orm_1 = require("mikro-orm");
const mongodb_1 = require("mongodb");
const server_1 = require("./server");
let Protocol = class Protocol {
    constructor() {
        this.createdAt = new Date();
    }
};
__decorate([
    mikro_orm_1.PrimaryKey(),
    __metadata("design:type", mongodb_1.ObjectID)
], Protocol.prototype, "_id", void 0);
__decorate([
    mikro_orm_1.SerializedPrimaryKey(),
    __metadata("design:type", String)
], Protocol.prototype, "id", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", String)
], Protocol.prototype, "name", void 0);
__decorate([
    mikro_orm_1.ManyToOne(),
    __metadata("design:type", server_1.Server)
], Protocol.prototype, "activeServer", void 0);
__decorate([
    mikro_orm_1.Property(),
    __metadata("design:type", Date)
], Protocol.prototype, "createdAt", void 0);
Protocol = __decorate([
    mikro_orm_1.Entity()
], Protocol);
exports.Protocol = Protocol;
//# sourceMappingURL=protocol.js.map