import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
import { Activity } from '../../models/activity.model';
import { CreateActivityInput } from './dto/input/create-activity.input';
import { GetActivityArgs } from './dto/args/get-activity.args';
import { GetActivitiesArgs } from './dto/args/get-activities.args';

@Injectable()
export class ActivitiesService {
  private prisma = new PrismaClient();

  public async createActivity(
    createActivityData: CreateActivityInput,
  ): Promise<Activity> {
    try {
      const id = uuidv4();
      await this.prisma.activity.create({
        data: { ...createActivityData, id },
      });

      return this.getOneById({ id });
    } catch (err) {
      console.log('Error on creating Activity | ', err);
    }
  }

  //   public updateUser(updateUserData: UpdateUserInput): User {
  //     const user = this.users.find(
  //       (user) => user.userId === updateUserData.userId,
  //     );

  //     Object.assign(user, updateUserData);

  //     return this.users.find((user) => user.userId === updateUserData.userId);
  //   }

  public async getOneById(getActivityArgs: GetActivityArgs): Promise<Activity> {
    const activity = await this.prisma.activity.findUnique({
      where: { id: getActivityArgs.id },
    });
    return activity;
  }

  public async findAll(
    getActivitiesArgs: GetActivitiesArgs,
  ): Promise<Activity[]> {
    const activities = await this.prisma.activity.findMany({
      where: { userId: getActivitiesArgs.userId },
    });
    return activities;
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
