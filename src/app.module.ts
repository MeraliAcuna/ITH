import { Module } from '@nestjs/common';
import { Connection } from './configs/DBConnection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/user/user.controller';
import { UserService } from './users/user/user.service';
import { SalesModule } from './api/Users/user/user.module';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({envFilePath: ProcessingInstruction.env.NODE_ENV==='docker' ? '.env.docker' : '.env.local'})], 
  Connection, UserModule, SalesModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}