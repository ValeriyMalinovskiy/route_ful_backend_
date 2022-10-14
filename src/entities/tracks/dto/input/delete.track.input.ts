import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteTrackInput {
  @Field()
  id: string;
}
