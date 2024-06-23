import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create.user.dto';
import { UsersPresenter } from '../users/user.presenter';

@Controller('partner/user')
export class PartnerUserController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.createPartnerUser(data);
    return new UsersPresenter(user);
  }
}
