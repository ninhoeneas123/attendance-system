import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_SERVICE') private readonly client: ClientProxy,
  ) { }

  create(createUserDto: CreateUserDto): Observable<number> {
    const pattern = { cmd: 'create' };
    const name = createUserDto;
    return this.client.send(pattern, name);
  }

  async findByEmail(email:string): Promise<any> {
    console.log('findByEmail', email)
    const pattern =  {cmd:'find-by-email' };
    const return2  = await this.client.send(pattern, email);
    console.log('findByEmail', return2)
    return return2
  }


}
