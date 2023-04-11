import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServicesDto } from './dto/create-service.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('services')
export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService
  ) { }

  @MessagePattern({ cmd: 'create-call' })
  create(@Body() createServicesDto) {
    return this.servicesService.create(createServicesDto);    
  }

  @MessagePattern({ cmd: 'find-call-for-patient' })
  findForPatient(@Body() cpf: string) {
    return this.servicesService.findForPatient(cpf);    
  }

  @MessagePattern({ cmd: 'find-call-for-doctor' })
  findForDoctor(@Body() id: string) {
    return this.servicesService.findForDoctor(id);    
  }

  @MessagePattern({ cmd: 'finish-call' })
  finishCall(@Body() id: string) {
    console.log(id)
    return this.servicesService.finishCall(id);    
  }

  @MessagePattern({ cmd: 'delete-call' })
  deleteCall(@Body() id: string) {
    return this.servicesService.deleteCall(id);    
  }
}
