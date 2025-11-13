import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { PontosService } from './pontos.service';
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';

@Controller('pontos')
export class PontosController {
  constructor(private service: PontosService) {}

  @Post()
  criar(@Body() dto: CreatePontoDto) {
    return this.service.criar(dto);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() dto: UpdatePontoDto) {
    return this.service.atualizar(Number(id), dto);
  }
}