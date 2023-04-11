import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Put, BadRequestException } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePatienteDto } from './dto/create-patient.dto';
import { FindPatientForCpf } from './dto/find-cpf-patient.dto';
import { lastValueFrom } from 'rxjs';

@Controller('patients')
export class PatientsController {
  constructor(
    private readonly patientsService: PatientsService,
  ) { }

  @Post('create')
  create(@Body() createPatientDto: CreatePatienteDto) {
    return this.patientsService.create(createPatientDto)
  }

  @Get('find')
  findAll() {
    return this.patientsService.findAll();
  }
  @Get('find-param')
  async findOneCpf(@Body() findPatientForCpf: FindPatientForCpf) {
    return this.patientsService.findParam(findPatientForCpf);
  }
  @Get('find-id/:id')
  async findById(@Param('id') id: string) {
    return this.patientsService.findForId(id);
  
  }
  @Put('update/:id')
  update(@Param('id') id: string, @Body() updatePatientDto) {
    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(id);
  }
}
