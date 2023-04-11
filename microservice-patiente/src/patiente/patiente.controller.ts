import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PatienteService } from './patiente.service';

@Controller()
export class PatienteController {
  constructor(private readonly patienteService: PatienteService) {}

  @MessagePattern({ cmd: 'create-patiente' })
  async create(@Payload() data) {
    return  await this.patienteService.create(data);
   
  }
  @MessagePattern({ cmd: 'find-patiente' })
  async find(@Payload() data):Promise<Array<object>> { 
    return  await this.patienteService.findAll();
  }
  @MessagePattern({ cmd: 'find-patiente-param' })
  async findForCpf(@Payload() data):Promise<object> {
    const { param } = data;
    return  await this.patienteService.findForParam(param);
  }

  @MessagePattern({ cmd: 'find-patiente-id' })
  async findForId(@Payload() data):Promise<object> {
    return  await this.patienteService.findForId(data);
  }

  @MessagePattern({ cmd: 'update-patiente' })
  async update(@Payload() data) {
    return  await this.patienteService.update(data.id, data.updatePatientDto);
  }

  @MessagePattern({ cmd: 'remove-patiente' })
  async remove(@Payload() data) {
    console.log(data)
    return  await this.patienteService.remove(data)
  }
}
