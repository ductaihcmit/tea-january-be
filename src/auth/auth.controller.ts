import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  handleLogin(@Body() body: AuthDto) {
    return this.authService.login(body);
  }

  @Post('register')
  handleRegister(@Body() body: AuthDto) {
    return this.authService.signup(body);
  }
}
