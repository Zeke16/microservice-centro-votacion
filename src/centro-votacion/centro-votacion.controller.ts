import { Controller } from '@nestjs/common';
import { CentroVotacionService } from './centro-votacion.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CentrosVotacionMSG } from 'src/common/constantes';

@Controller()
export class CentroVotacionController {
  constructor(private readonly centroVotacionService: CentroVotacionService) {}

  @MessagePattern(CentrosVotacionMSG.CREATE)
  async create(@Payload() payload: any) {
    return await this.centroVotacionService.create(payload);
  }

  @MessagePattern(CentrosVotacionMSG.FIND_ALL)
  async findAll() {
    return this.centroVotacionService.findAll();
  }

  @MessagePattern(CentrosVotacionMSG.FIND_ONE)
  async findOne(@Payload() id: number) {
    return this.centroVotacionService.findOne(id);
  }

  @MessagePattern(CentrosVotacionMSG.UPDATE)
  async update(@Payload() payload: any) {
    const { id, centroVotacionDTO } = payload;
    return this.centroVotacionService.update(id, centroVotacionDTO);
  }

  @MessagePattern(CentrosVotacionMSG.DELETE)
  async delete(@Payload() id: number) {
    return this.centroVotacionService.delete(id);
  }

  @MessagePattern(CentrosVotacionMSG.SET_STATUS)
  async changeStatus(@Payload() payload: any) {
    const { id, estado } = payload;

    return this.centroVotacionService.changeStatus(id, estado);
  }

  @MessagePattern(CentrosVotacionMSG.SET_JRV)
  async setJrv(@Payload() payload: any) {
    const { id, idJrv } = payload;

    return this.centroVotacionService.setJrv(id, idJrv);
  }
}
