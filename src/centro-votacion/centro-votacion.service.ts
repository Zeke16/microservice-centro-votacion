import { Injectable } from '@nestjs/common';
import {
  $Enums,
  EstadoJrv,
  Prisma,
  centros_votacion,
  jrv_centro_votacion,
} from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CentroVotacionService {
  constructor(private readonly model: PrismaService) {}

  async create(
    centroVotacionDTO: Prisma.centros_votacionCreateInput,
  ): Promise<centros_votacion> {
    return await this.model.centros_votacion.create({
      data: centroVotacionDTO,
    });
  }

  async findAll(): Promise<centros_votacion[]> {
    return await this.model.centros_votacion.findMany({
      select: {
        id_centro_votacion: true,
        id_municipio: true,
        nombre: true,
        direccion: true,
        estado: true,
        creado_en: true,
        modificado: true,
      },
    });
  }

  async findOne(id: number): Promise<centros_votacion> {
    return await this.model.centros_votacion.findUnique({
      where: {
        id_centro_votacion: id,
      },
    });
  }

  async update(
    id: number,
    centroVotacionDTO: Prisma.centros_votacionUpdateInput,
  ): Promise<centros_votacion> {
    return await this.model.centros_votacion.update({
      where: {
        id_centro_votacion: id,
      },
      data: centroVotacionDTO,
    });
  }

  async delete(id: number) {
    return await this.model.centros_votacion.delete({
      where: {
        id_centro_votacion: id,
      },
    });
  }

  async changeStatus(
    id: number,
    estado: Prisma.EnumEstadoJrvFieldUpdateOperationsInput,
  ): Promise<centros_votacion> {
    return await this.model.centros_votacion.update({
      where: {
        id_centro_votacion: id,
      },
      data: {
        estado: estado,
      },
    });
  }
}
