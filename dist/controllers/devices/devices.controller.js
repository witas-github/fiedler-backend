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
exports.DevicesController = void 0;
const common_1 = require("@nestjs/common");
const mikro_orm_1 = require("mikro-orm");
const device_1 = require("../../entities/device");
const create_device_dto_1 = require("./create-device.dto");
const update_device_dto_1 = require("./update-device.dto");
const protocol_1 = require("../../entities/protocol");
let DevicesController = class DevicesController {
    constructor(em) {
        this.em = em;
    }
    async getDevices() {
        return this.em.find(device_1.Device, {}, ['activeServer', 'registeredServer', 'protocol']);
    }
    async getDevice(params) {
        return this.em.find(device_1.Device, { _id: params.id }, ['activeServer', 'registeredServer', 'protocol']);
    }
    async findByProtocol(params) {
        const protocol = await this.em.findOne(protocol_1.Protocol, { _id: params.protocolId });
        return this.em.find(device_1.Device, { protocol: protocol }, ['activeServer', 'registeredServer', 'protocol']);
    }
    async findBySrn(params) {
        return this.em.find(device_1.Device, { srn: params.srn }, ['activeServer', 'registeredServer', 'protocol']);
    }
    async createDevice(body) {
        const device = this.em.create(device_1.Device, body);
        await this.em.persistAndFlush(device);
        return device;
    }
    async updateDevice(params, body) {
        const device = await this.em.findOne(device_1.Device, { _id: params.id });
        mikro_orm_1.wrap(device).assign(body);
        await this.em.persistAndFlush(device);
        return device;
    }
    async deleteDevice(params) {
        this.em.remove(device_1.Device, { _id: params.id });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "getDevices", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "getDevice", null);
__decorate([
    common_1.Get('protocol/:protocolId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "findByProtocol", null);
__decorate([
    common_1.Get('srn/:srn'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "findBySrn", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_device_dto_1.CreateDeviceDto]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "createDevice", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_device_dto_1.UpdateDeviceDto]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "updateDevice", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "deleteDevice", null);
DevicesController = __decorate([
    common_1.Controller('devices'),
    __metadata("design:paramtypes", [mikro_orm_1.EntityManager])
], DevicesController);
exports.DevicesController = DevicesController;
//# sourceMappingURL=devices.controller.js.map