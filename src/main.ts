import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from "helmet";
import {ValidationPipe} from "@nestjs/common";
import * as process from "node:process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.setGlobalPrefix('instemps-api');
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    methodes: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 600
  });
  app.useGlobalPipes(new ValidationPipe(
      {
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }
  ));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
