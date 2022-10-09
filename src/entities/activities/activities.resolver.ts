import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetActivityArgs } from './dto/args/get-activity.args';
import { ActivitiesService } from './activities.service';
import { Activity } from '../../models/activity.model';
import { CreateActivityInput } from './dto/input/create-activity.input';

@Resolver(() => Activity)
export class ActivitiesResolver {
  constructor(
    private readonly activitiesService: ActivitiesService, // private readonly tracksService: TracksService,
  ) {}

  @Query(() => Activity, { name: 'activity', nullable: true })
  async getActivity(
    @Args() getActivityArgs: GetActivityArgs,
  ): Promise<Activity> {
    return this.activitiesService.getOneById(getActivityArgs);
  }

  // @ResolveField('track')
  // async getTrack(@Parent() track: Track) {
  //   const args: GetTrackArgs = { id: track.id };
  //   return this.tracksService.getTrack(args);
  // }

  @Mutation(() => Activity)
  createActivity(
    @Args('createActivityData') createActivityData: CreateActivityInput,
  ): Promise<Activity> {
    return this.activitiesService.createActivity(createActivityData);
  }
}
