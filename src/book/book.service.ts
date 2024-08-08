import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DbService } from '../db/db.service';
import { Book } from './entities/book.entity';

function getId() {
  return Math.floor(Math.random() * 1000000);
}

@Injectable()
export class BookService {
  @Inject()
  private readonly dbService: DbService;

  async list(name: string) {
    const books: Book[] = await this.dbService.read();
    return !name ? books : books.filter((book) => book.name.includes(name));
  }

  async findById(id: number) {
    const books: Book[] = await this.dbService.read();
    return books.find((book) => book.id === id);
  }

  async create(createBookDto: CreateBookDto) {
    const books: Array<Book> = await this.dbService.read();

    const book = new Book();
    book.id = getId();
    book.author = createBookDto.author;
    book.cover = createBookDto.cover;
    book.description = createBookDto.description;
    book.name = createBookDto.name;

    books.push(book);

    await this.dbService.write(books);
    return book;
  }

  async update(updateBookDto: UpdateBookDto) {
    console.log(updateBookDto);
    const books: Array<Book> = await this.dbService.read();

    const foundBook = books.find((book) => book.id === updateBookDto.id);
    if (!foundBook) {
      throw new BadRequestException('未找到对应的图书！');
    }

    foundBook.name = updateBookDto.name;
    foundBook.description = updateBookDto.description;
    foundBook.cover = updateBookDto.cover;
    foundBook.author = updateBookDto.author;

    await this.dbService.write(books);

    return foundBook;
  }

  async delete(id: number) {
    const books: Array<Book> = await this.dbService.read();
    const idx = books.findIndex((v) => v.id === id);
    if (idx === -1) {
      throw new BadRequestException('未到对应的图书！')
    }
    books.splice(idx, 1);
    await this.dbService.write(books);
    return 'delete:' + id;
  }
}
