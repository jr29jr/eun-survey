import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './entity/option.entity';
import { OptionResolver } from './option.resolver';
import { OptionService } from './option.service';

@Module({
    imports: [TypeOrmModule.forFeature([Option])],
    exports: [TypeOrmModule],
    providers: [OptionService,OptionResolver ]
})
export class OptionModule {}
