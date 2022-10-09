import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './entities/users/users.module';
import { TracksModule } from './entities/tracks/tracks.module';
import { ActivityTypesModule } from './entities/activity-types/activity-types.module';
import { ActivitiesModule } from './entities/activities/activities.module';

@Module({
  imports: [
    TestModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    UsersModule,
    ActivitiesModule,
    ActivityTypesModule,
    TracksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
