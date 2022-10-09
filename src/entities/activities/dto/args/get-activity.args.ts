import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetActivityArgs {
  @Field()
  id: string;
}
