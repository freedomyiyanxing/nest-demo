import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseInterceptors,
  UploadedFiles, Inject,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { AaaService } from '../aaa/aaa.service';

@Controller('api/person')
export class PersonController {
  @Inject()
  private readonly aaaService: AaaService;

  constructor(private readonly personService: PersonService) {
  }

  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    this.aaaService.getName('person')
    return `received: name=${name},age=${age}`;
  }

  @Get(':id')
  urlParams(@Param('id') id: string) {
    return `received: id=${id}`;
  }

  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: name: ${createPersonDto.name}; age: ${createPersonDto.age}`;
  }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/'
  }) as any)
  body2(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return `received: ${files.map((v) => v.filename)}`
  }
}
