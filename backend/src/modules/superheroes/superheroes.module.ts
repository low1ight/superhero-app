import { Module } from '@nestjs/common';
import { SuperheroesController } from './api/superheroes.controller';
import { SuperheroesRepository } from './infrastructure/superheroes.repository';
import { SuperheroesQueryRepository } from './infrastructure/superheroes.query-repository';
import { SuperheroesService } from './application/superheroes.service';
import { Superhero } from './domain/superhero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Service } from './provider/s3.service';
import { SuperheroesQueryService } from './application/superheroes.query-service';

@Module({
  imports: [TypeOrmModule.forFeature([Superhero])],
  controllers: [SuperheroesController],
  providers: [
    SuperheroesService,
    SuperheroesRepository,
    SuperheroesQueryService,
    SuperheroesQueryRepository,
    S3Service,
  ],
})
export class SuperheroesModule {}
