import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Activity } from './activity.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field(() => String)
  joinDate: Date;

  @Field(() => String)
  updatedAt: Date;

  @Field()
  userName: string;

  @Field({ nullable: true })
  userPhoto?: string;

  @Field(() => [User], { nullable: 'itemsAndList' })
  following?: User[];

  @Field(() => [User], { nullable: 'itemsAndList' })
  followedBy?: User[];

  @Field(() => [Activity], { nullable: 'itemsAndList' })
  activities?: Activity[];
}
