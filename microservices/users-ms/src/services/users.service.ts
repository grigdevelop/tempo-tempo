import { ValidationException, StringUtils } from '@gregoris/core';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from '../entities';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>
    ) {
    }

    public async insert( user: Partial<UserEntity> ) {

        if( StringUtils.isNullOrEmpty( user.username ) ) {
            throw new ValidationException('username required.');
        }

        const existing = await this.usersRepo.find({ where: { username: user.username }})
        if( existing.length !== 0 ) {
            throw new ValidationException('username should be unique.');
        }

        return await this.usersRepo.save( user );
    }

    public async getUsers( ) {
        return await this.usersRepo.find();
    }
}
