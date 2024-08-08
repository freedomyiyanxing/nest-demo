import { IsNotEmpty } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends CreateBookDto{
  @IsNotEmpty({ message: 'id 不能为空' })
  id: number;
}

