import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { MikroOrmModule } from 'nestjs-mikro-orm';
import { DevicesController } from './controllers/devices/devices.controller';
import { ServersController } from './controllers/servers/servers.controller';
import { ProtocolsController } from './controllers/protocols/protocols.controller';
import { Server } from './entities/server';

const entities = [
  Server,
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
