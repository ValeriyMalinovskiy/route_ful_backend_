import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';

@Module({
  imports: [ConfigModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
