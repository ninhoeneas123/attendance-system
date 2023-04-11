import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateServicesDto } from './dto/create-call.dto';
import { FindForCpfPatientDto } from './dto/findForCpfPatientDto.dto';
import { FindForDoctoDto } from './dto/findForDoctor.dto';

@Injectable()
export class CallsService {
  constructor(
    @Inject('CALLS_SERVICE') private client: ClientProxy,
  ) { }


  create(createServicesDto: CreateServicesDto): Observable<number> {
    const pattern = { cmd: 'create-call' };
    return this.client.send(pattern, createServicesDto);
  }

  findForPatient(findForCpfPatientDto: FindForCpfPatientDto): Observable<any> {
    const { cpf } = findForCpfPatientDto;
    const pattern = { cmd: 'find-call-for-patient' };
    return this.client.send(pattern, cpf);
  }

  findForDoctor(findForDoctoDto: FindForDoctoDto): Observable<any> {
    const { id } = findForDoctoDto;
    const pattern = { cmd: 'find-call-for-doctor' };
    return this.client.send(pattern, id);
  }

  finishCall(id: string): Observable<any> {
    console.log('finishCall', id);
    const pattern = { cmd: 'finish-call' };
    return this.client.send(pattern, id);
  }

  remove(id: string): Observable<any> {
    const pattern = { cmd: 'delete-call' };
    return this.client.send(pattern, id);
  }
}
