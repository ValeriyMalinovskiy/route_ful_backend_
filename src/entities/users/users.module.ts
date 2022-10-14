import { Module } from '@nestjs/common';
import { ActivitiesService } from '../activities/activities.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, UsersService, ActivitiesService],
})
export class UsersModule {}
