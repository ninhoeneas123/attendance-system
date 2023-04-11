import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, lastValueFrom, throwError, timeout } from 'rxjs';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
    constructor(
        @Inject('PATIENTES_SERVICE') private readonly client: ClientProxy,
    ) { }

    async create(createPatientDto: any) {
        const pattern = { cmd: 'create-patiente' };
        return this.client.send(pattern, createPatientDto).pipe(timeout(10000));
    }

    async findAll() {
        const pattern = { cmd: 'find-patiente' };
        return this.client.send(pattern, '');
    }

    async findParam(findParam: any) {
        const pattern = { cmd: 'find-patiente-param' };
        return await this.client.send(pattern, findParam).pipe(catchError(error => throwError(() => new RpcException(error.response))),timeout(10000))
    }

    async findForId(id: any) {
        const pattern = { cmd: 'find-patiente-id' };
        return await this.client.send(pattern, id).pipe(catchError(error => throwError(() => new RpcException(error.response))),timeout(10000))
    }

    async findById(id: string) {
        const pattern = { cmd: 'find-patiente-id' };
        const data$ = await this.client.send(pattern, id);
        const data = await lastValueFrom(data$);
        if (data.code === 400) {
            throw new BadRequestException('Patient not found');
        }
        return data;
    }

    async update(id: string, updatePatientDto: UpdatePatientDto) {
        const pattern = { cmd: 'update-patiente' };
        const updateData = {
            id,
            updatePatientDto
        }
        return this.client.send(pattern, updateData);
    }

    async remove(id: string) {
        const pattern = { cmd: 'remove-patiente' };
        return this.client.send(pattern, id);
      }
}
