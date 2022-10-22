import { Details } from '../models/Details';
import { Details as DetailsEntity } from '../entities/detail.entity'; 
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DetailsService {
    constructor(
        @InjectRepository(DetailsEntity)
        private detailsEntity : Repository<DetailsEntity>
    ){ 
        //constructor
    }
    private readonly Details: Details[] = []

    async create( details : Details ){
        return await this.detailsEntity.insert(details);
    }

    getAll() : Details[]{
        return this.Details
    }

    detailsExists(id : number) : boolean{
        const index = this.Details.findIndex( product => product.id === id)
        return index !== -1
    }
}