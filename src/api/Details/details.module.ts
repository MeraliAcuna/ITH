import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Details } from 'src/entities/detail.entity';
import { DetailsController } from './details.controller';
import { DetailsService } from './details.service';

@Module({
    imports: [TypeOrmModule.forFeature([Details])],
    providers: [DetailsService],
    controllers: [DetailsController],
    exports: [TypeOrmModule]
})
export class DetailsModule {}
//dgn