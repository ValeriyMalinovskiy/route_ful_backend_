import { Field, InputType } from '@nestjs/graphql';
import { ActivityType } from '../../../../models/activity-type.model';
import { User } from '../../../../models/user.model';

@InputType()
export class UpdateActivityInput {
  @Field()
  private: boolean;

  @Field(() => ActivityType)
  type: ActivityType;

  @Field(() => User)
  user: User;
}
