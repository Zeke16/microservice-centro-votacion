import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CentroVotacionModule } from './centro-votacion/centro-votacion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.prod'],
      isGlobal: true,
    }),
    CentroVotacionModule,
  ],
})
export class AppModule {}
