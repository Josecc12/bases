import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './dtos/CreateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} //inyeccion de dependencias

  @Get()
  findAll() {
    const records = this.usersService.findAll();
    return records;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  destroy(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
