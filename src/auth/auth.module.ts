import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { CommonUserController } from './common-user/common-user.controller';
import { PartnerUserController } from './partner-user/partner-user.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: '123456',
      signOptions: { expiresIn: '10000s' },
    }),
  ],
  controllers: [CommonUserController, PartnerUserController, AuthController],
  providers: [UsersService, AuthService],
})
export class AuthModule {}
