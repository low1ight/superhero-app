import { Module } from '@nestjs/common';
import { SuperheroesController } from './api/superheroes.controller';
import { SuperheroesRepository } from './infrastructure/superheroes.repository';
import { SuperheroesQueryRepository } from './infrastructure/superheroes.query-repository';
import { SuperheroesService } from './application/superheroes.service';
import { Superhero } from './domain/superhero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Superhero])],
  controllers: [SuperheroesController],
  providers: [
    SuperheroesService,
    SuperheroesRepository,
    SuperheroesQueryRepository,
  ],
})
export class SuperheroesModule {}
