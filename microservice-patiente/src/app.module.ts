import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatienteModule } from './patiente/patiente.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:3n34s123@cluster0.ygk4b.mongodb.net/microservice-patientes'),
    PatienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
