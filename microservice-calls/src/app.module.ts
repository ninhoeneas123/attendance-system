import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:3n34s123@cluster0.ygk4b.mongodb.net/microservice-calls'),
    ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
