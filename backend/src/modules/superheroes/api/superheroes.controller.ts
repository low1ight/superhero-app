import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SuperheroInputDto } from './input-dto/superhero-input.dto';
import { SuperheroesService } from '../application/superheroes.service';
import { SuperheroesQueryService } from '../application/superheroes.query-service';
import { UseImageInterceptor } from '../../../core/decorators/UseImageInterceptor';
import { UploadedImage } from '../../../core/decorators/UploadedImage';

@Controller('api/superheroes')
export class SuperheroesController {
  constructor(
    private readonly superheroesService: SuperheroesService,
    private readonly superheroesQueryService: SuperheroesQueryService,
  ) {}

  @Get()
  async getAll() {
    return await this.superheroesQueryService.getAll();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.superheroesQueryService.getById(id);
  }

  @Post()
  @UseImageInterceptor()
  async create(
    @UploadedImage()
    image: Express.Multer.File | undefined,
    @Body() dto: SuperheroInputDto,
  ) {
    console.log(image);
    return await this.superheroesService.createSuperhero(dto, image || null);
  }

  @Put(':id')
  @UseImageInterceptor()
  async update(
    @UploadedImage() image: Express.Multer.File | undefined,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: SuperheroInputDto,
  ) {
    return await this.superheroesService.updateById(id, dto, image || null);
  }

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return await this.superheroesService.deleteById(id);
  }
}
