/** *
 * Copyright (c) 2024 湖南数字侠软件有限公司
 * @author freedom.yi
 * @date 2024/8/8
 * @project nest-demo
 *
 * */
import * as multer from 'multer';
import * as fs from 'fs';
import express from 'express';
import { extname } from 'node:path';
import * as process from 'process';

const dir = process.cwd() + '/public/uploads';

export const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    try {
      fs.mkdirSync(dir);
    } catch (e) {

    }
    callback(null, dir)
  },
  filename(req: express.Request, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + extname(file.originalname);
    callback(null, uniqueSuffix);
  }
})
