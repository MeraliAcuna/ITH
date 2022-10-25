import { Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import { Details } from 'src/models/Details';
import { DetailsService } from './details.service';

@Controller('user')
export class DetailsController {
    constructor(private detailsService : DetailsService ){

    }
    @Post()
    Create(@Body() params : Details ): string | boolean{
        if(this.detailsService.detailsExists(Number(params.id))){
            return "El producto ya existe"
        }
        try {
            this.detailsService.create(params)
            return true
        } catch (error) {
            console.log({error})
        }
    }
}