import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { Track } from '../../models/track.model';
import { GetTrackArgs } from './dto/args/get-track.args';
import { CreateTrackInput } from './dto/input/create-track.input';

@Resolver(() => Track)
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

  @Query(() => Track, { name: 'track', nullable: true })
  async getTrack(@Args() getTrackArgs: GetTrackArgs): Promise<Track> {
    return this.tracksService.getTrack(getTrackArgs);
  }

  //   @Query(() => [User], { name: 'users', nullable: 'items' })
  //   getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
  //     return this.usersService.getUsers(getUsersArgs);
  //   }

  @Mutation(() => Track)
  createTrack(
    @Args('createTrackData') createTrackData: CreateTrackInput,
  ): Promise<Track> {
    return this.tracksService.createTrack(createTrackData);
  }

  //   @Mutation(() => User)
  //   updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
  //     return this.usersService.updateUser(updateUserData);
  //   }

  //   @Mutation(() => User)
  //   deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
  //     return this.usersService.deleteUser(deleteUserData);
  //   }
}
