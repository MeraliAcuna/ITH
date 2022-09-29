import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/models/User';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService : UserService ){

    }
    @Post()
    Create(@Body() params : User ):void{
        this.userService.create(params)
    }
    @Get('/all')
    getUsers(): User[] {
        return this.userService.getAll()
    }
    @Get('/:correo')
    getUser(@Param('correo') param) : User{
        // Valida la respuesta, si el usuario no existe, regresa un mensaje diciendo que no fue encontrado
        const user = this.userService.getByEmail(param)
        if(user){
            return user
        }
        return "Usuario no encontrado"

        //return user ? user : "No existe"
        //return user ?? "No existe"
    }
}
