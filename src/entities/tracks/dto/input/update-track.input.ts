import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTrackInput {
  @Field()
  geoData: string;
}
