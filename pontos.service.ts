import { Injectable } from '@nestjs/common';
import { CreatePontoDto } from './dto/create-ponto.dto';
import { UpdatePontoDto } from './dto/update-ponto.dto';

export interface Ponto extends CreatePontoDto {
  id: number;
}

@Injectable()
export class PontosService {
  private pontos: Ponto[] = [];
  private id = 1;

  criar(dto: CreatePontoDto) {
    const novo: Ponto = { id: this.id++, ...dto };
    this.pontos.push(novo);
    return novo;
  }

  listar() {
    return this.pontos;
  }

  atualizar(id: number, dto: UpdatePontoDto) {
    const item = this.pontos.find(p => p.id === id);
    if (!item) return null;
    Object.assign(item, dto);
    return item;
  }
}
