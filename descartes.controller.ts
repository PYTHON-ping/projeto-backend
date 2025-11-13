import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { DescartesService } from './descartes.service';
import { CreateDescarteDto } from './dto/create-descarte.dto';
import { FiltroDescarteDto } from './dto/filtro-descarte.dto';

@Controller('descartes')
export class DescartesController {
  constructor(private service: DescartesService) {}

  @Post()
  registrar(@Body() dto: CreateDescarteDto) {
    return this.service.registrar(dto);
  }

  @Get()
  filtrar(@Query() filtro: FiltroDescarteDto) {
    return this.service.filtrar(filtro);
  }
}