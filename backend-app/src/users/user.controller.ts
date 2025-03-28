import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.findAll();
  }

  @Post()
  async createUser(@Body() body: { name: string; email: string }) {
    return this.userService.create(body.name, body.email);
  }
}
