import { BadRequestException, Controller, NotFoundException } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext, RpcException } from '@nestjs/microservices';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller()
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) { }

  @MessagePattern({ cmd: 'create-doctor' })
  create(@Payload() data):Promise<any> { 
    return this.doctorsService.create(data);
  }
  @MessagePattern({ cmd: 'find-param' })
  findCpf(@Payload() data):Promise<any> { 
    console.log( data)
    return this.doctorsService.findParam(data);
  }
  @MessagePattern({ cmd: 'find-doctor-all' })
  findParam():Promise<any> { 
    return this.doctorsService.findAll();
  }

  @MessagePattern({ cmd: 'update-doctor' })
  update(@Payload() data):Promise<any> { 
    const { id, doctorData } = data;
    return this.doctorsService.update(id, doctorData);
  }

  @MessagePattern({ cmd: 'remove-doctor' })
  remove(@Payload() data):Promise<any> { 
    console.log("remove", data)
    return this.doctorsService.remove(data);
  }





}
