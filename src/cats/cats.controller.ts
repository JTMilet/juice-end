/*
 * @LastEditors: 杜康
 * @LastEditTime: 2022-07-21 18:40:51
 */
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() :string {
    return 'This action returns all cats'
  }
}
