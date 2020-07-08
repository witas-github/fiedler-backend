import { Module } from '@nestjs/common';import { CoreModule } from './core/core.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesService } from './services/devices/devices.service';
import { ServersService } from './services/servers/servers.service';
import { DevicesController } from './controllers/devices/devices.controller';
import { ServersController } from './controllers/servers/servers.controller';
import { ProtocolsController } from './controllers/protocols/protocols.controller';
import { ProtocolsService } from './services/protocols/protocols.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    CoreModule
  ],
  providers: [DevicesService, ServersService, ProtocolsService],
  controllers: [DevicesController, ServersController, ProtocolsController]
})
export class AppModule {}
