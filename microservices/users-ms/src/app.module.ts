import { Module } from "@nestjs/common";
import { UsersService } from './services';
import { UsersController } from './controllers';
import { UserEntity } from './entities';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            database: ':memory:',
            entities: [ UserEntity ],
            synchronize: true,
            migrationsRun: true,
            type: 'sqlite'
        }),
        TypeOrmModule.forFeature([ UserEntity ])
    ],
    controllers: [ UsersController ],
    providers: [ UsersService ]
})
export class AppModule {

}
