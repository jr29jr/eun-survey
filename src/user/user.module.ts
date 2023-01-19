import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entitiy';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    providers: [UserService, UserResolver]
})
export class UserModule {}
