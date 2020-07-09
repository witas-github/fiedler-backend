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
const protocols_service_1 = require("../../services/protocols/protocols.service");
const create_protocol_dto_1 = require("../../dto/create-protocol.dto");
let ProtocolsController = class ProtocolsController {
    constructor(protocolsService) {
        this.protocolsService = protocolsService;
    }
    async create(createProtocolDto) {
        await this.protocolsService.create(createProtocolDto);
    }
    async findAll() {
        return this.protocolsService.findAll();
    }
    findOne(params) {
        return this.protocolsService.findOne(params.id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_protocol_dto_1.CreateProtocolDto]),
    __metadata("design:returntype", Promise)
], ProtocolsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProtocolsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProtocolsController.prototype, "findOne", null);
ProtocolsController = __decorate([
    common_1.Controller('protocols'),
    __metadata("design:paramtypes", [protocols_service_1.ProtocolsService])
], ProtocolsController);
exports.ProtocolsController = ProtocolsController;
//# sourceMappingURL=protocols.controller.js.map