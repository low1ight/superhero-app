import { Module } from '@nestjs/common';
import { SuperheroesController } from './api/superheroes.controller';
import { SuperheroesRepository } from './infrastructure/superheroes.repository';
import { SuperheroesQueryRepository } from './infrastructure/superheroes.query-repository';
import { SuperheroesImagesSetRepository } from './infrastructure/superheroes-images-set.repository';
import { SuperheroesService } from './application/superheroes.service';
import { Superhero } from './domain/superhero.entity';
import { SuperheroImagesSet } from './domain/superhero-images-set.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Service } from './provider/s3.service';
import { SuperheroesQueryService } from './application/superheroes.query-service';

@Module({
  imports: [TypeOrmModule.forFeature([Superhero, SuperheroImagesSet])],
  controllers: [SuperheroesController],
  providers: [
    SuperheroesService,
    SuperheroesRepository,
    SuperheroesQueryService,
    SuperheroesQueryRepository,
    SuperheroesImagesSetRepository,
    S3Service,
  ],
})
export class SuperheroesModule {}
