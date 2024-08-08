import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { BbbModule } from './bbb/bbb.module';
import { AaaModule } from './aaa/aaa.module';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [PersonModule, BbbModule, AaaModule, UserModule, BookModule],
})

export class AppModule {
}
