import { Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { /**/ } from "src/sales.controller";
@Controller('sales')
export class SalesController{
    constructor(private salesService: SalesService){
    }
    @Post('/:id_user')
    Create (@Body()params: ISales){
        console.log(JSON.stringify(params))
    }
}