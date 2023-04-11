import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CallsService } from './calls.service';
import { CreateServicesDto } from './dto/create-call.dto';
import { FindForCpfPatientDto } from './dto/findForCpfPatientDto.dto';
import { FindForDoctoDto } from './dto/findForDoctor.dto';
import { UpdateCallDto } from './dto/update-call.dto';

@Controller('calls')
export class CallsController {
  constructor(private readonly callsService: CallsService) { }

  @Post('create')
  create(@Body() createServicesDto: CreateServicesDto) {
    return this.callsService.create(createServicesDto);
  }

  @Get('find-for-patient')
  findForPatient(@Body() findForCpfPatientDto: FindForCpfPatientDto) {
    return this.callsService.findForPatient(findForCpfPatientDto);
  }

  @Get('find-for-doctor')
  findForDoctor(@Body() findForDoctoDto: FindForDoctoDto) {
    return this.callsService.findForDoctor(findForDoctoDto);
  }

  @Put('finish/:id')
  finishCall(@Param('id') id: string) {
    console.log('finishCall', id);
    return this.callsService.finishCall(id);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.callsService.remove(id);
  }

}