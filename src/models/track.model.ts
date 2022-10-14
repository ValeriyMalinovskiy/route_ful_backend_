import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Activity } from './activity.model';

@ObjectType()
export class Track {
  @Field(() => ID)
  id: string;

  @Field()
  geoData: string;

  @Field(() => Activity, { nullable: true })
  activity?: Activity;
}
