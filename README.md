<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) nestjs 系统学习

## Installation

```bash
$ yarn install
```

## nest/cli 生成代码
```bash 
nest g resource person   # 生成 curd 的 person 模块
```

## webstorm 调试 nestjs
1. 顶部菜单找到 RUN 接着选择 Edit Configurations 会弹出一个窗口
2. 接着点击 + 号，选择 Node.js 接着参考下面图片，将 Node parameters 和 Javascript file 的参数修改为对应的数值。
```html
Node parameters: -r ts-node/register -r tsconfig-paths/register
Javascript file: src\main.ts
```

## Running the app

```bash
# development
$ yarn run start

# 开发
$ yarn run dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
