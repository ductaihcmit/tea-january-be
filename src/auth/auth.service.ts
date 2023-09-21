import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './auth.modal';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { BaseApiException } from 'src/base/exception/base-api.exception';
import BaseNoti from 'src/base/notify';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable({})
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private authModel: Model<Auth>,
    private userSerivce: UserService,
    private jwtService: JwtService,
  ) {}

  async signToken(id: string) {
    return this.jwtService.signAsync(
      { id },
      {
        secret: 'jwt',
        expiresIn: '1d',
      },
    );
  }

  async login(body) {
    const { email, password } = body;

    if (!email || !password) {
      throw new BaseApiException({
        message: BaseNoti.USER.USER_NOT_EXISTS,
      });
    }

    const findUser: any = await this.userSerivce.findUser(email);
    if (!findUser) {
      throw new BaseApiException({
        message: BaseNoti.USER.USER_NOT_EXISTS,
      });
    }

    const passwordIsMatch = await bcrypt.compare(password, findUser.password);
    if (!passwordIsMatch) {
      throw new BaseApiException({
        message: BaseNoti.AUTH.WRONG_PASSWORD,
      });
    }
    const accessToken = await this.signToken(findUser._id);

    return {
      message: 'success',
      data: {
        email,
        token: {
          accessToken,
        },
      },
    };
  }

  async signup(body) {
    const { email, password } = body;

    if (!email || !password) {
      throw new BaseApiException({
        message: BaseNoti.USER.USER_NOT_EXISTS,
      });
    }

    const findUser = await this.userSerivce.findUser(email);
    if (findUser) {
      throw new BaseApiException({
        message: BaseNoti.USER.USER_EXISTS,
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const payload = {
      email,
      password: passwordHash,
    };
    await this.userSerivce.createUser(payload);

    return {
      message: 'success',
    };
  }
}
