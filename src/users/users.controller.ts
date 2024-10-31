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

@Controller('users')
export class UsersController {
  @Get()
  async findAll() {
    return [
      {
        id: 1,
        name: 'Alejandro',
      },
    ];
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id') id: string) {
    return {
      id: id,
      name: 'Alejandro',
    };
  }

  @Post()
  async createUser(@Body() createUserDto: any) {
    return createUserDto;
  }

  @Patch(':id')
  async updateUser(@Body() updateUserDto: any, @Param('id') id: string) {
    return updateUserDto;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return {
      id,
    };
  }
}
