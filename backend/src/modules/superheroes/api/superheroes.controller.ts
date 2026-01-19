import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SuperheroInputDto } from './input-dto/superhero-input.dto';
import { SuperheroesService } from '../application/superheroes.service';
import { SuperheroesQueryService } from '../application/superheroes.query-service';
import { UseImageInterceptor } from '../../../core/decorators/UseImageInterceptor';
import { UploadedImage } from '../../../core/decorators/UploadedImage';
import { BaseQueryParams } from '../../../core/dto/base-query-params.input.dto';

@Controller('api/superheroes')
export class SuperheroesController {
  constructor(
    private readonly superheroesService: SuperheroesService,
    private readonly superheroesQueryService: SuperheroesQueryService,
  ) {}

  @Get()
  async getAllSuperheroes(@Query() query: BaseQueryParams) {
    console.log({ query });
    return await this.superheroesQueryService.getAll(query);
  }

  @Get(':id')
  async getSuperheroById(@Param('id', ParseIntPipe) id: number) {
    return await this.superheroesQueryService.getById(id);
  }

  @Post()
  @UseImageInterceptor()
  async createSuperhero(
    @UploadedImage(false)
    image: Express.Multer.File | undefined,
    @Body() dto: SuperheroInputDto,
  ) {
    console.log(image);
    return await this.superheroesService.createSuperhero(dto, image || null);
  }

  @Put(':id')
  @UseImageInterceptor()
  async updateSuperhero(
    @UploadedImage(false) image: Express.Multer.File | undefined,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: SuperheroInputDto,
  ) {
    return await this.superheroesService.updateById(id, dto, image || null);
  }

  @Delete(':id')
  async deleteSuperheroesById(@Param('id', ParseIntPipe) id: number) {
    return await this.superheroesService.deleteById(id);
  }

  @Post(':id/images')
  @UseImageInterceptor()
  async addSuperheroesImage(
    @UploadedImage(true)
    image: Express.Multer.File,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.superheroesService.addImageFromSetForHero(id, image);
  }

  @Delete(':superheroId/images/:imageId')
  async deleteSuperheroesImage(
    @Param('superheroId', ParseIntPipe) superheroId: number,
    @Param('imageId', ParseIntPipe) imageId: number,
  ) {
    return await this.superheroesService.deleteImageFromSetForHero(
      superheroId,
      imageId,
    );
  }
}
