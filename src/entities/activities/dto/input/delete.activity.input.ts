import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteActivityInput {
  @Field()
  id: string;
}
