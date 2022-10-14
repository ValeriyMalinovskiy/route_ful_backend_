import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ActivityType } from './activity-type.model';
import { Track } from './track.model';
import { User } from './user.model';

@ObjectType()
export class Activity {
  @Field(() => ID)
  id: string;

  @Field()
  private: boolean;

  @Field(() => Int)
  typeId: number;

  @Field()
  type?: ActivityType;

  @Field()
  userId: string;

  @Field(() => User)
  user?: User;

  @Field({ nullable: true })
  trackId?: string;

  @Field(() => Track, { nullable: true })
  track?: Track;
}
