import { IDetails } from '../../models/Details';
import { Details as DetailsEntity } from '../../entities/detail.entity'; 
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {
    constructor(
        @InjectRepository(DetailsEntity)
        private detailsEntity : Repository<DetailsEntity>
    ){ 
        
    }
    private readonly Details: IDetails[] = []

    async create_details( id_sales: number, details : IDetails[] ){
       // return await this.detailsEntity.insert(details);
        details.forEach(element => {
            this.detailsEntity.insert(element) //element del tipo IDetails

            /*
            this.detailsEntity.insert({
            product: element.product,
            unit_price: element.unit_price,
            quantity: element.quantity,
            id_sales: element.id_sales
            })
            */
           
        });
        return await this.detailsEntity.insert(details)
    }

    getAll() : IDetails[]{
        return this.Details
    }

    detailsExists(id : number) : boolean{
        const index = this.Details.findIndex( product => product.id === id)
        return index !== -1
    }
}