import { BadRequestException, Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Patientes, PatientesDocument } from './schemas/patiente.schema';

@Injectable()
export class PatienteService {
  constructor(
    @InjectModel(Patientes.name)
    private readonly patienteModel: Model<PatientesDocument>,
  ) { }
  async create(data) {
    await this.patienteModel.create(data);
    return {
      message: 'Paciente cadastrado com sucesso!',
    };
  }

  async findAll(): Promise<Array<PatientesDocument>> {
    return await this.patienteModel.find();
  }

  async findForParam(param: string): Promise<object> {
    const patiente = await this.patienteModel.findOne({ $or: [ { email: param }, { cpf: param }] })
    if (!patiente) {
      throw new RpcException(
        new BadRequestException("patient not found")
      );
    }
    return patiente;
  }

  async findForId(id: string): Promise<object> {
    const patiente = await this.patienteModel.findOne({ _id: new Types.ObjectId(id)})
    if (!patiente) {
      throw new RpcException(
        new BadRequestException("patient not found") 
      );

    }
    return patiente;
  }

  async update(id: string, updatePatienteData: object): Promise<object> {
    await this.patienteModel.findByIdAndUpdate({ _id: new Types.ObjectId(id) }, { $set: updatePatienteData });
    return {
      message: 'Paciente editado com sucesso!',
    };
  }

  async remove(id: string): Promise<object> {
    await this.patienteModel.findByIdAndRemove({ _id: new Types.ObjectId(id) });
    return {
      message: 'Paciente removido com sucesso!',
    };
  }
} 