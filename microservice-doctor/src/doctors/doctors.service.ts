import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from './schemas/doctor.schema';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectModel(Doctor.name)
    private doctorsModel: Model<DoctorDocument>,
  ) { }

  async create(data: object): Promise<any> {
    if (!data) {
      throw new RpcException(
        new BadRequestException("Doctor data is required")
      );
    }
    const doctor = this.doctorsModel.create(data);
    return doctor;
  }

  async findParam(param: string): Promise<any> {
    console.log(  param)
    const doctor = await this.doctorsModel.findOne({ $or: [{ email: param }, { register: param }] });
    if (!doctor) {
      throw new RpcException(
        new BadRequestException("Doctor not found")
      );
    }
    return doctor;
  }

  async findAll(): Promise<any> {
    const doctors = await this.doctorsModel.find();
    return doctors;
  }

  async update(id:string, doctorData:any): Promise<any> {
    console.log("update", id, doctorData)
    const doctor =  await this.doctorsModel.findByIdAndUpdate(id,doctorData, { new: true });
    console.log("update", doctor)
    if (!doctor) {
      throw new RpcException(
        new BadRequestException("Doctor not found")
      );
    } 
    return doctor;
  }

  async remove(id:string): Promise<any> {
    console.log("remove", id)
    const doctor =  await this.doctorsModel.findByIdAndRemove(id);
    if (!doctor) {
      throw new RpcException(
        new BadRequestException("Doctor no exist")
      );
    } 
    return {message:'Doctor removed successfully'};
  }

}