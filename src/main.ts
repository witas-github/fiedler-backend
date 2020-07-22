import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EntityManager } from 'mikro-orm';


async function bootstrap() {
  const fs = require('fs');
  const keyFile  = fs.readFileSync('../example.key');
  const certFile = fs.readFileSync('../example.crt');

  const app = await NestFactory.create(AppModule, {
    cors: true,
    httpsOptions: {
      key: keyFile,
      cert: certFile,
    }});
  app.useGlobalPipes(new ValidationPipe());

  app.use((req, res, next) => {
    // Add entity manager to every request to be able to use db in param decorators
    req.entityManager = app.get(EntityManager) as EntityManager;
    next();
  });

  await app.listen(3000,'0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);



}
bootstrap();
