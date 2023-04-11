import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalAuthGuard } from './guards/local-auth.guard';



@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: "zdsk0we8i9-wokdsa9di-0231okeẃo0=",
      signOptions: { expiresIn: '60s' },
    }),
     ClientsModule.register([
      {
        name: 'USER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'user_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),

  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService,LocalAuthGuard, LocalStrategy, JwtStrategy, ClientsModule]
})
export class AuthModule {}
