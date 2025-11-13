import { Module } from '@nestjs/common';
import { DescartesService } from './descartes.service';
import { DescartesController } from './descartes.controller';
import { PontosModule } from '../pontos/pontos.module';

@Module({
  imports: [PontosModule],
  controllers: [DescartesController],
  providers: [DescartesService],
  exports: [DescartesService],
})
export class DescartesModule {}