import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';


@Module({
  imports: [ 
    DoctorsModule,
    MongooseModule.forRoot('mongodb+srv://admin:3n34s123@cluster0.ygk4b.mongodb.net/microservice-doctors'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
