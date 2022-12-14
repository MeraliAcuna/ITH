import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Details } from 'src/entities/detail.entity';
import { Sales } from 'src/entities/sales.entity';
import { DetailsService } from '../Details/details.service';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
    imports: [TypeOrmModule.forFeature([Sales, Details])],
    providers: [SalesService, DetailsService],
    controllers: [SalesController],
    exports: [TypeOrmModule]
})
export class SalesModule {}