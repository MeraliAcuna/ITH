import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity(){
    export class User(){
        @PrimaryGeneratedColumn()
        id: Number;
        @Column()
        nombre: String;
        @Column()
        correo: String;
        @Column()
        telefono:String;
        @Column({default: true})
        isActive: Boolean;
    }
    //https://docs.nestjs.com/techniques/database
}