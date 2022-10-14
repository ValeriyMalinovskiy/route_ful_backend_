import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTrackInput {
  @Field()
  geoData: string;
}
