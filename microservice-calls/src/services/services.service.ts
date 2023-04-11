import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateServicesDto } from './dto/create-service.dto';
import { Services, ServicesDocument } from './schemas/service.schema';

@Injectable()
export class ServicesService {
  @InjectModel(Services.name)
  private servicesModel: Model<ServicesDocument>

  async create(createServicesDto) {
    const data = new Date(Date.now()).toLocaleString().split(',')[0]
    createServicesDto.date = data.split(' ')[0];
    createServicesDto.hour = data.split(' ')[1];
    console.log(createServicesDto)
    await this.servicesModel.create(createServicesDto);

    return { message: 'Atendimento criado com sucesso' };
  }

  async findForPatient(cpf: string) {
    const services = await this.servicesModel.find({ cpfPatient: cpf });
    const callsCount = services.length;

    return {
      callsCount,
      services
    }
  }


  countServices(services: Services[]) {
    const countServices = services.length;
    const openServices = []
    const closedServices = []
    for (let i = 0; i < services.length; i++) {
      if (services[i].openService === false) {
        closedServices.push(services[i])
      }
      if (services[i].openService === true) {
        openServices.push(services[i])
      }
    }
    const countOpenServices = openServices.length
    const countClosedServices = closedServices.length
  
    return {
      countServices,
      countOpenServices,
      countClosedServices
    }
  }

  async findForDoctor(id: string) {
    const services = await this.servicesModel.find({ idDoctor: id });
    const callsCount = this.countServices(services);
    return {
      callsCount,
      services
    }
  }

  async finishCall(id: string) {
    await this.servicesModel.findByIdAndUpdate(id, { openService: false })
    return { message: 'Atendimento finalizado com sucesso' }
  }

  async deleteCall(id: string) {
    await this.servicesModel.findByIdAndDelete(id)
    return { message: 'Atendimento deletado com sucesso' }
  }


}
