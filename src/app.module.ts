import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SolutionsModule } from './solutions/solutions.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
import { ReviewModule } from './review/review.module';
import { FeedController } from './feed/feed.controller';
import { FeedService } from './feed/feed.service';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGO_DB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    
    SolutionsModule,
    AuthModule,
    MailModule,
    ReviewModule,
    FeedModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    FeedService,
  ],
  controllers: [FeedController],
})
export class AppModule {}
