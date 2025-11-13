import { Module } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { RelatorioController } from './relatorio.controller';
import { DescartesModule } from '../descartes/descartes.module';
import { PontosModule } from '../pontos/pontos.module';

@Module({
  imports: [DescartesModule, PontosModule],
  controllers: [RelatorioController],
  providers: [RelatorioService],
})
export class RelatorioModule {}