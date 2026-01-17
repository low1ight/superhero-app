import { INestApplication } from '@nestjs/common';
import { pipesSetup } from './pipes.setup';
import { corsSetup } from './cors.setup';

export function appSetup(app: INestApplication) {
  corsSetup(app);
  pipesSetup(app);
}
