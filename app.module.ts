import { Module } from '@nestjs/common';
import { PontosModule } from './pontos/pontos.module';
import { DescartesModule } from './descartes/descartes.module';
import { RelatorioModule } from './relatorio/relatorio.module';

@Module({
  imports: [PontosModule, DescartesModule, RelatorioModule],
})
export class AppModule {}