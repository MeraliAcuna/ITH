import { User } from './../../models/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private readonly Users: User[] = []

    create( user : User ): void{
        this.Users.push(user)
    }

    getAll() : User[]{
        return this.Users
    }

    getByEmail(correo : string) : User{
        return this.Users.find( (user) => user.correo === correo )
    }
    updateUserById(id : number, user : User) : boolean {
        let user_index = this.Users.findIndex( (user) => user.id === id )
        if(user_index !== -1 ){
            //var ID, NOMBRE, TELEFONO, EMAIL
            const new_user = Object.assign(this.Users[user_index], user)
            this.Users[user_index] = new_user
           /* this.Users[user_index] = {
                id : user.id,
                nombre : user.nombre,
                correo : user.correo,
                telefono : user.telefono

            }
            /*if(this.Users[user_index].id !== undefined){
                ID = this.Users[user_index].id
            }
            if(this.Users[user_index].id !== undefined){
                NOMBRE = this.Users[user_index].nombre
            }
            if(this.Users[user_index].id !== undefined){
                EMAIL = this.Users[user_index].correo
            }
            if(this.Users[user_index].id !== undefined){
                TELEFONO = this.Users[user_index].telefono
            }

            this.Users[user_index] = {
                id : user.id,
                nombre : user.nombre,
                correo : user.correo,
                telefono : user.telefono
            }*/

            return true
        }
        return false
    }
    /**
     * @description fgg
     * @param id id del usuario que queremos verificar si eiste
     * @returns  true si el usuario no existe o false si existe
     */
    userExists(id : number) :boolean{
        const index = this.Users.findIndex(user => user.id === id)
        return index === -1
    }
}

