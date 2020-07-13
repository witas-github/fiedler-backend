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
exports.ServersController = void 0;
const common_1 = require("@nestjs/common");
const mikro_orm_1 = require("mikro-orm");
const server_1 = require("../../entities/server");
const create_server_dto_1 = require("./create-server.dto");
const update_server_dto_1 = require("./update-server.dto");
let ServersController = class ServersController {
    constructor(em) {
        this.em = em;
    }
    async getServers() {
        return this.em.find(server_1.Server, {});
    }
    async getServer(params) {
        return this.em.find(server_1.Server, { _id: params.id });
    }
    async createServer(body) {
        const server = this.em.create(server_1.Server, body);
        await this.em.persistAndFlush(server);
        return server;
    }
    async updateCategory(params, body) {
        const server = await this.em.findOne(server_1.Server, { _id: params.id });
        mikro_orm_1.wrap(server).assign(body);
        await this.em.persistAndFlush(server);
        return server;
    }
    async deleteServer(params) {
        this.em.remove(server_1.Server, { _id: params.id });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ServersController.prototype, "getServers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServersController.prototype, "getServer", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_server_dto_1.CreateServerDto]),
    __metadata("design:returntype", Promise)
], ServersController.prototype, "createServer", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_server_dto_1.UpdateServerDto]),
    __metadata("design:returntype", Promise)
], ServersController.prototype, "updateCategory", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ServersController.prototype, "deleteServer", null);
ServersController = __decorate([
    common_1.Controller('servers'),
    __metadata("design:paramtypes", [mikro_orm_1.EntityManager])
], ServersController);
exports.ServersController = ServersController;
//# sourceMappingURL=servers.controller.js.map