import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const fs = require('fs');
  const keyFile  = fs.readFileSync('/home/witas/localhost.key');
  const certFile = fs.readFileSync('/home/witas/localhost.crt');

  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: keyFile,
      cert: certFile,
    }});
  app.useGlobalPipes(new ValidationPipe());


  app.enableCors();
  await app.listen(3000,'0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
