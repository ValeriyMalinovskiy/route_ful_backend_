import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  userName: string;
}
