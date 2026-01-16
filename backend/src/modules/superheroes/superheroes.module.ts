import { Module } from '@nestjs/common';
import { SuperheroesController } from './api/superheroes.controller';

@Module({
  controllers: [SuperheroesController],
})
export class SuperheroesModule {}
