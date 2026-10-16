import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '@/app.module';
import { envs } from '@/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // * Global validation pipes DTOs, etc.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    }),
  );

  // * Graceful shutdown on SIGTERM/SIGINT (lifecycle hooks, close connections)
  app.enableShutdownHooks();
  await app.listen(envs.port);
}
void bootstrap();
