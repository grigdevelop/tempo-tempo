import { Controller, Get, Put, Post, Body, HttpCode } from "@nestjs/common";
import { UsersService } from '../services';
import { UserEntity } from '../entities';

@Controller('/api/users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ) {
    }

    @Get()
    public get() {
        return this.usersService.getUsers();
    }

    @Put()
    @HttpCode(201)
    public create( @Body() user: UserEntity ) {
        return this.usersService.insert( user );
    }
}
