import { Module } from '@nestjs/common';import { CoreModule } from './core/core.module';
import { DevicesModule } from './devices/devices.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    CoreModule,
    DevicesModule
  ],
})
export class AppModule {}
