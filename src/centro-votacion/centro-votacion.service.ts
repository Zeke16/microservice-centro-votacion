import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { $Enums, EstadoJrv, Prisma, centros_votacion } from '@prisma/client';
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
        nombre: true,
        id_municipio: true,
        direccion: true,
        estado: true,
        creado_en: true,
        modificado_en: true,
        junta_receptora_votos: true,
        municipios: {
          select: {
            id_municipio: true,
            nombre: true,
            departamentos: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<centros_votacion> {
    return await this.model.centros_votacion.findUnique({
      where: {
        id_centro_votacion: id,
      },
      select: {
        id_centro_votacion: true,
        nombre: true,
        id_municipio: true,
        direccion: true,
        estado: true,
        creado_en: true,
        modificado_en: true,
        junta_receptora_votos: true,
        municipios: {
          select: {
            id_municipio: true,
            nombre: true,
            departamentos: true,
          },
        },
      },
    });
  }

  async findOneByName(nombre: string): Promise<centros_votacion> {
    console.log(nombre);

    return await this.model.centros_votacion.findFirst({
      where: {
        nombre: nombre,
      },
      select: {
        id_centro_votacion: true,
        nombre: true,
        id_municipio: true,
        direccion: true,
        estado: true,
        creado_en: true,
        modificado_en: true,
        junta_receptora_votos: true,
        municipios: {
          select: {
            id_municipio: true,
            nombre: true,
            departamentos: true,
          },
        },
      },
    });
  }

  async update(
    id: number,
    centroVotacionDTO: Prisma.centros_votacionUpdateInput,
  ): Promise<centros_votacion> {
    const countNombre = await this.model.centros_votacion.count({
      where: {
        nombre: centroVotacionDTO.nombre.toString(),
      },
    });

    if (countNombre > 1)
      throw new HttpException(
        'Centro de votación ya posee este nombre',
        HttpStatus.NOT_FOUND,
      );

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

  async changeStatus(id: number): Promise<centros_votacion> {
    let estado = await this.model.centros_votacion.findUnique({
      where: {
        id_centro_votacion: id,
      },
    });

    if (estado.estado == 'ABIERTA') estado.estado = 'CERRADA';
    else estado.estado = 'ABIERTA';

    return await this.model.centros_votacion.update({
      where: {
        id_centro_votacion: id,
      },
      data: {
        estado: estado.estado,
      },
    });
  }
}
