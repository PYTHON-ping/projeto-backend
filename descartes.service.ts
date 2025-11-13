import { Injectable } from '@nestjs/common';
import { CreateDescarteDto } from './dto/create-descarte.dto';
import { FiltroDescarteDto } from './dto/filtro-descarte.dto';

@Injectable()
export class DescartesService {
  private descartes: CreateDescarteDto[] = [];

  registrar(dto: CreateDescarteDto) {
    this.descartes.push(dto);
    return dto;
  }

  filtrar(filtro: FiltroDescarteDto) {
    return this.descartes.filter(d => {
      return (
        (filtro.pontoId ? d.pontoId === filtro.pontoId : true) &&
        (filtro.tipo ? d.tipo === filtro.tipo : true) &&
        (filtro.usuario ? d.usuario === filtro.usuario : true) &&
        (filtro.data ? d.data === filtro.data : true)
      );
    });
  }

  obterTodos() {
    return this.descartes;
  }
}
