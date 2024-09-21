import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Vote-A-Meal API')
    .setDescription('Vote-A-Meal API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  const corsOptions: CorsOptions = {
    origin: configService.get<string>('CORS_ORIGIN').split(','),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  app.enableCors(corsOptions);

  const port = configService.get<number>('PORT') || 3000;
  const bindAddress = configService.get<string>('SERVER_BIND_ADDRESS') || '0.0.0.0';

  await app.listen(port, bindAddress);
}
bootstrap();