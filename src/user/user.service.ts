import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.modal';
import { UserDto } from './user.dto';

@Injectable({})
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(body: UserDto) {
    const newUser = await new this.userModel(body);
    await newUser.save();
    return newUser;
  }

  async findUser(email: string) {
    return this.userModel.findOne({ email });
  }
}
