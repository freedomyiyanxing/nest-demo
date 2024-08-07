import { Injectable } from '@nestjs/common';
import { AaaService } from '../aaa/aaa.service';

@Injectable()
export class BbbService {
  constructor(private readonly aaaService: AaaService) {
  }

  getName() {
    this.aaaService.getName('bbb');
  }
}
