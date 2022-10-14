import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ActivityType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
