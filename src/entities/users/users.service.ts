import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from '../../models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { GetUserArgs } from './dto/args/get-user.args';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  public async createUser(createUserData: CreateUserInput): Promise<User> {
    try {
      const id = uuidv4();
      return await this.prisma.user.create({ data: { ...createUserData, id } });
    } catch (err) {
      console.log('Error on creating User | ', err);
    }
  }

  public async getUser(getUserArgs: GetUserArgs): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: getUserArgs.id },
    });
    return user;
  }
}
