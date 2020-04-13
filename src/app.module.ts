import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller'

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        console.log(`Request...`);
        next();
      })
      .forRoutes(
                 { path: 'cats', method: RequestMethod.GET },
                 { path: 'cats/:id', method: RequestMethod.GET }
                );
  }
}
