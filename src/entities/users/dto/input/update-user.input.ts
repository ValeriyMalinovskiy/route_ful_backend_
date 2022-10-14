import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  email: string;

  @Field({ nullable: false })
  userName: string;

  @Field()
  userPhoto?: string;
}
