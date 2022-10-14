import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateActivityInput {
  @Field()
  private: boolean;

  @Field()
  userId: string;

  @Field()
  trackId: string;

  @Field(() => Int)
  typeId: number;
}
