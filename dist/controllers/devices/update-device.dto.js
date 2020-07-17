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
exports.UpdateDeviceDto = void 0;
const protocol_1 = require("../../entities/protocol");
const class_validator_1 = require("class-validator");
const server_1 = require("../../entities/server");
class UpdateDeviceDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MinLength(3),
    __metadata("design:type", String)
], UpdateDeviceDto.prototype, "srn", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", protocol_1.Protocol)
], UpdateDeviceDto.prototype, "protocol", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", server_1.Server)
], UpdateDeviceDto.prototype, "registeredServer", void 0);
exports.UpdateDeviceDto = UpdateDeviceDto;
//# sourceMappingURL=update-device.dto.js.map