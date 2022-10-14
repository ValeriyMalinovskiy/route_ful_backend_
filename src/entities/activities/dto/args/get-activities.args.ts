import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetActivitiesArgs {
  @Field()
  userId: string;
}
