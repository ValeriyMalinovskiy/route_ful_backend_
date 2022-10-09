import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class GetActivityTypeArgs {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}
