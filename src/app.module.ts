import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { BbbModule } from './bbb/bbb.module';
import { AaaModule } from './aaa/aaa.module';

@Module({
  imports: [PersonModule, BbbModule, AaaModule],
})

export class AppModule {
}
