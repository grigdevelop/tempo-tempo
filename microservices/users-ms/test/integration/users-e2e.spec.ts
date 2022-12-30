// noinspection SqlWithoutWhere

import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { Injectable } from "@nestjs/common";
import { NestApplication } from "@nestjs/core";
import { DataSource, QueryRunner } from 'typeorm';
import { getTestConnectionConfigs } from '@gregoris/common';
import { TypeOrmModule, InjectDataSource } from "@nestjs/typeorm";
import { UserEntity } from '../../src/entities';
import { UsersService } from '../../src/services';
import { UsersController } from '../../src/controllers';

@Injectable()
class SqlConnection {
    constructor(
        @InjectDataSource()public readonly dataSource: DataSource
    ) {
    }
}

describe('users-e2e', () => {
    let app: NestApplication;
    let queryRunner: QueryRunner;

    beforeAll(async () => {
        const connConfigs = getTestConnectionConfigs();
        const moduleRef = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot({
                    ...connConfigs,
                    type: 'postgres',
                    entities: [ UserEntity ]
                }),
                TypeOrmModule.forFeature([ UserEntity ])
            ],
            providers: [ UsersService, SqlConnection ],
            controllers: [ UsersController ]
        }).compile();

        app = moduleRef.createNestApplication();

        const connection = await app.resolve(SqlConnection);
        queryRunner = connection.dataSource.createQueryRunner('master');
        await app.listen(8001);
    });

    afterAll(async () => {
        await app.close();
    });

    beforeEach(async () => {
        await queryRunner.query('DELETE FROM users_ms.users;');
    });

    it('should create user', async () => {
        await request(app.getHttpServer())
            .put('/api/users')
            .send( { username: 'lorem' })
            .expect(201);
    });

    it('should get users', async () => {
        // mock users
        await queryRunner.query(`
        INSERT INTO users_ms.users(username)
        VALUES ('john.smith'), ('lorem.ipsum');
        `);

        await request(app.getHttpServer())
            .get('/api/users')
            .expect(200)
            .expect(( res ) => {
                expect(res.body).toHaveLength(2);
            });
    });
});
