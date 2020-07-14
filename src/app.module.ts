import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { DevicesController } from './controllers/devices/devices.controller';
import { ServersController } from './controllers/servers/servers.controller';
import { ProtocolsController } from './controllers/protocols/protocols.controller';
import { Server } from './entities/server';
import { Protocol } from './entities/protocol';
import { Device } from './entities/device';

const entities = [
  Server,
  Protocol,
  Device
];

@Module({
  imports: [

    MikroOrmModule.forRoot({
      entities: entities,
      entitiesDirsTs: ['src/entities'],
      dbName: 'test',
      clientUrl: 'mongodb://localhost:27017',
      discovery: {
        warnWhenNoEntities: true,
      },
    }),

    CoreModule,
  ],
  providers: [],
  controllers: [DevicesController, ServersController, ProtocolsController],
})
export class AppModule {
}
