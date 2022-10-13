import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserController } from './api/user.controller';
import { UserService } from './api/user.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController],
    exports: [TypeOrmModule]
})
export class UserModule {}