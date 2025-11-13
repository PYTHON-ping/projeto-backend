import { Injectable } from '@nestjs/common';
import { DescartesService } from '../descartes/descartes.service';
import { PontosService } from '../pontos/pontos.service';

@Injectable()
export class RelatorioService {
  constructor(
    private descartes: DescartesService,
    private pontos: PontosService,
  ) {}

  gerar() {
    const d = this.descartes.obterTodos();
    const p = this.pontos.listar();

    const porLocal: Record<number, number> = {};
    const porTipo: Record<string, number> = {};
    const porUsuario: Record<string, number> = {};

    d.forEach(x => {
      porLocal[x.pontoId] = (porLocal[x.pontoId] || 0) + 1;
      porTipo[x.tipo] = (porTipo[x.tipo] || 0) + 1;
      porUsuario[x.usuario] = 1;
    });

    const maiorLocal = Object.entries(porLocal)
      .map(([k, v]) => ({ id: Number(k), total: v }))
      .sort((a, b) => b.total - a.total)[0];

    const maiorTipo = Object.entries(porTipo)
      .map(([k, v]) => ({ tipo: k, total: v }))
      .sort((a, b) => b.total - a.total)[0];

    const ultimos30 = d.filter(x => {
      const diff = Date.now() - new Date(x.data).getTime();
      return diff <= 30 * 24 * 60 * 60 * 1000;
    });

    const media30 = ultimos30.length / 30;

    const mesAtual = new Date().getMonth();
    const totalMesAtual = d.filter(x => new Date(x.data).getMonth() === mesAtual).length;
    const totalMesAnterior = d.filter(x => new Date(x.data).getMonth() === mesAtual - 1).length;

    const variacao = totalMesAnterior === 0
      ? 100
      : ((totalMesAtual - totalMesAnterior) / totalMesAnterior) * 100;

    return {
      localMaisUsado: maiorLocal ? maiorLocal.id : null,
      tipoMaisDescartado: maiorTipo ? maiorTipo.tipo : null,
      mediaDescartes30dias: media30,
      totalUsuarios: Object.keys(porUsuario).length,
      totalPontos: p.length,
      variacaoPercentual: variacao
    };
  }
}
