import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ActivityType } from '../../models/activity-type.model';
import { GetActivityTypeArgs } from './dto/args/get-activity-type.args';

@Injectable()
export class ActivityTypesService {
  private prisma = new PrismaClient();

  public async getActivityType(
    getActivityTypeArgs: GetActivityTypeArgs,
  ): Promise<ActivityType> {
    const activityType = await this.prisma.activityType.findUnique({
      where: { id: getActivityTypeArgs.id },
    });
    return activityType;
  }
}
