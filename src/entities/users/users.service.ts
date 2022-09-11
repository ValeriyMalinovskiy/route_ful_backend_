import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from './dto/input/update-user.input';
import { GetUsersArgs } from './dto/args/get-users.args';
import { GetUserArgs } from './dto/args/get-user.args';
import { DeleteUserInput } from './dto/input/delete.user.input';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  public async createUser(createUserData: CreateUserInput): Promise<User> {
    try {
      const id = uuidv4();
      await this.prisma.user.create({ data: { ...createUserData, id } });

      return this.getUser({ email: createUserData.email });
    } catch (err) {
      console.log('Error on creating User | ', err);
    }
  }

  //   public updateUser(updateUserData: UpdateUserInput): User {
  //     const user = this.users.find(
  //       (user) => user.userId === updateUserData.userId,
  //     );

  //     Object.assign(user, updateUserData);

  //     return this.users.find((user) => user.userId === updateUserData.userId);
  //   }

  public async getUser(getUserArgs: GetUserArgs): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email: getUserArgs.email },
    });
    return user;
  }

  //   public getUsers(getUsersArgs: GetUsersArgs): User[] {
  //     return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  //   }

  //   public deleteUser(deleteUserData: DeleteUserInput): User {
  //     const userIndex = this.users.findIndex(
  //       (user) => user.userId === deleteUserData.userId,
  //     );

  //     const user = this.users[userIndex];

  //     this.users.splice(userIndex);

  //     return user;
  //   }
}
