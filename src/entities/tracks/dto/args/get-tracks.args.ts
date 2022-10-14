import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetTracksArgs {
  @Field(() => [Int])
  trackIds: number[];
}
