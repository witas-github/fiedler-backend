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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtocolsController = void 0;
const common_1 = require("@nestjs/common");
const mikro_orm_1 = require("mikro-orm");
const protocol_1 = require("../../../dist/entities/protocol");
const create_protocol_dto_1 = require("./create-protocol.dto");
const update_protocol_dto_1 = require("./update-protocol.dto");
let ProtocolsController = class ProtocolsController {
    constructor(em) {
        this.em = em;
    }
    async getProtocols() {
        return this.em.find(protocol_1.Protocol, {}, ['activeServer', 'registeredServer']);
    }
    async getProtocol(params) {
        return this.em.find(protocol_1.Protocol, { _id: params.id }, ['activeServer', 'registeredServer']);
    }
    async createProtocol(body) {
        const protocol = this.em.create(protocol_1.Protocol, body);
        await this.em.persistAndFlush(protocol);
        return protocol;
    }
    async updateProtocol(params, body) {
        const protocol = await this.em.findOne(protocol_1.Protocol, { _id: params.id });
        mikro_orm_1.wrap(protocol).assign(body);
        await this.em.persistAndFlush(protocol);
        return protocol;
    }
    async deleteProtocol(params) {
        this.em.remove(protocol_1.Protocol, { _id: params.id });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProtocolsController.prototype, "getProtocols", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProtocolsController.prototype, "getProtocol", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_protocol_dto_1.CreateProtocolDto]),
    __metadata("design:returntype", Promise)
], ProtocolsController.prototype, "createProtocol", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_protocol_dto_1.UpdateProtocolDto]),
    __metadata("design:returntype", Promise)
], ProtocolsController.prototype, "updateProtocol", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProtocolsController.prototype, "deleteProtocol", null);
ProtocolsController = __decorate([
    common_1.Controller('protocols'),
    __metadata("design:paramtypes", [mikro_orm_1.EntityManager])
], ProtocolsController);
exports.ProtocolsController = ProtocolsController;
//# sourceMappingURL=protocols.controller.js.map