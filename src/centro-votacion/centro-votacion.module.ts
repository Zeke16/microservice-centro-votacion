import { Module } from '@nestjs/common';
import { CentroVotacionController } from './centro-votacion.controller';
import { CentroVotacionService } from './centro-votacion.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.prod',
    }),
  ],
  controllers: [CentroVotacionController],
  providers: [CentroVotacionService, PrismaService],
})
export class CentroVotacionModule {}
