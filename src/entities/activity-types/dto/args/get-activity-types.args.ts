import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetActivityTypesArgs {
  @Field(() => [ID])
  activityTypeIds: number[];
}
