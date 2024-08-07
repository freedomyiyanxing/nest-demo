import { Injectable } from '@nestjs/common';

@Injectable()
export class AaaService {
  getName(name: string) {
    console.log(`${name} 调用的 Aaa Service`)
  }
}
