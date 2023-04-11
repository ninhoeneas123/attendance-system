import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    
    ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    console.log(email, pass)
    const user$ = await this.usersService.findByEmail(email)
    const userData = user$.toPromise();
    const user = await userData;
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException(`User not found`);
  }


  async login(user: any) {
    const payload = { username: user.email, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
