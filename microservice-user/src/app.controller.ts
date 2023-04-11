import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext, RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Users, UsersDocument } from './schema/user.schema';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectModel(Users.name)
    private usersModel: Model<UsersDocument>,
  ) { }

  @MessagePattern({ cmd: 'create' })
  accumulate(data: CreateUserDto) {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      throw new RpcException({ message: 'por favor preencha todos os campos' });
    }
    const createUser = this.usersModel.create(data);

    return createUser;
  }
  @MessagePattern({ cmd:'find-by-email' })
  async findByEmail(email: string): Promise<any> {
    console.log("teste")
    const user = await this.usersModel.findOne({ email });
    console.log(user)
    return user;

  }
}
