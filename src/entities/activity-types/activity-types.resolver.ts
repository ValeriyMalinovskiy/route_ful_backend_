import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from '../../models/user.model';
import { ActivityType } from '../../models/activity-type.model';
import { ActivityTypesService } from './activity-types.service';
import { GetActivityTypeArgs } from './dto/args/get-activity-type.args';

@Resolver(() => ActivityType)
export class ActivityTypesResolver {
  constructor(private readonly activityTypesService: ActivityTypesService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(
    @Args() getActivityTypeArgs: GetActivityTypeArgs,
  ): Promise<ActivityType> {
    return this.activityTypesService.getActivityType(getActivityTypeArgs);
  }
}
