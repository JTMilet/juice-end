/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 19:30:30
 */
import { Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Post()
  login() :Object{
    return {
      code: 200,
      data: false,
      message: '暂无用户'
    }
  }
}
