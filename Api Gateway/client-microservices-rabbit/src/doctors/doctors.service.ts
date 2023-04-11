import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, lastValueFrom, throwError } from 'rxjs';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { FindForParamDto } from './dto/find-for-param.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
    constructor(
        @Inject('DOCTOR_SERVICE') private readonly client: ClientProxy,
    ) { }

    async create(createDoctorDto: CreateDoctorDto) {
        const pattern = { cmd: 'create-doctor' };
        console.log("teste")
        return await this.client.send(pattern, createDoctorDto)
            .pipe(catchError(error => throwError(() => new RpcException(error.response))))
    }

    async findAll() {
        const pattern = { cmd: 'find-doctor-all' };
        return this.client.send(pattern, '');
    }

    async findByParam(param: string): Promise<any> {
        const pattern = { cmd: 'find-param' };
        const data$ = await this.client.send(pattern, param).pipe(catchError(error => throwError(() => new RpcException(error.response))))

        const data = await lastValueFrom(data$);

        return data;
    }

    async update(id: string, doctorData: object) {
        const pattern = { cmd: 'update-doctor' };
        const updateData = {
            id,
            doctorData
        }
        return this.client.send(pattern, updateData).pipe(catchError(error => throwError(() => new RpcException(error.response))))  
    }
    
    async remove(id: string) {
        const pattern = { cmd: 'remove-doctor' };
        return this.client.send(pattern, id).pipe(catchError(error => throwError(() => new RpcException(error.response))))  
    }
}
