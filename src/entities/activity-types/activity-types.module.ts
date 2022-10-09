import { Module } from '@nestjs/common';
import { ActivityTypesResolver } from './activity-types.resolver';
import { ActivityTypesService } from './activity-types.service';

@Module({
  providers: [ActivityTypesResolver, ActivityTypesService],
})
export class ActivityTypesModule {}
