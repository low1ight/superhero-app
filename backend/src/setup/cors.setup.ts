import { INestApplication } from '@nestjs/common';

export function corsSetup(app: INestApplication) {
  app.enableCors({
    origin: 'http://localhost:5173',
  });
}
