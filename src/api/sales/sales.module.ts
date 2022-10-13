import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { sales } from 'src/entities/sales.entity';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
    imports: [TypeOrmModule.forFeature([sales])],
    providers: [SalesService],
    controllers: [SalesController],
    exports: [TypeOrmModule]
})
export class SalesModule {}