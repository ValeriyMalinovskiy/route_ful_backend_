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
      return await this.prisma.activity.create({
        data: { ...createActivityData, id },
      });
    } catch (err) {
      console.log('Error on creating Activity | ', err);
    }
  }

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
}
