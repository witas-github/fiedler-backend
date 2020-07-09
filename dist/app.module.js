"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_module_1 = require("./core/core.module");
const mongoose_1 = require("@nestjs/mongoose");
const devices_service_1 = require("./services/devices/devices.service");
const servers_service_1 = require("./services/servers/servers.service");
const devices_controller_1 = require("./controllers/devices/devices.controller");
const servers_controller_1 = require("./controllers/servers/servers.controller");
const protocols_controller_1 = require("./controllers/protocols/protocols.controller");
const protocols_service_1 = require("./services/protocols/protocols.service");
const device_schema_1 = require("./entities/device.schema");
const protocol_schema_1 = require("./entities/protocol.schema");
const server_schema_1 = require("./entities/server.schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017'),
            mongoose_1.MongooseModule.forFeature([
                { name: device_schema_1.Device.name, schema: device_schema_1.DeviceSchema },
                { name: protocol_schema_1.Protocol.name, schema: protocol_schema_1.ProtocolSchema },
                { name: server_schema_1.Server.name, schema: server_schema_1.ServerSchema },
            ]),
            core_module_1.CoreModule
        ],
        providers: [devices_service_1.DevicesService, servers_service_1.ServersService, protocols_service_1.ProtocolsService],
        controllers: [devices_controller_1.DevicesController, servers_controller_1.ServersController, protocols_controller_1.ProtocolsController]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map