import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create.user.dto';
import { UsersPresenter } from '../users/user.presenter';

@Controller('common/user')
export class CommonUserController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.createCommonUser(data);
    return new UsersPresenter(user);
  }
}
