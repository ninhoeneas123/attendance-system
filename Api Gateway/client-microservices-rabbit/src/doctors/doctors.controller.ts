import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { FindForParamDto } from './dto/find-for-param.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(
    private readonly doctorsService: DoctorsService,
    ) {}

  @Post('create')
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto)
  }
 
  @Get('find')
  findAll() {
    return this.doctorsService.findAll();
  }
  @Get('find-for-param')
  async findOneCpf(@Body() findForParamDto: FindForParamDto) {
    const { param } = findForParamDto;
    return this.doctorsService.findByParam(param);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateDoctorDto:UpdateDoctorDto) {
    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(id);
  }
}


