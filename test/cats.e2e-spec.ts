import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { async } from 'rxjs/internal/scheduler/async';

describe('CatsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/cats (POST)', () => {
    request(app.getHttpServer())
      .post('/cats')
      .send({name: 'toto', age: 22, breed: 'red'})
      .expect(201, {name: 'no', breed: 'no',  age: 34 });

  });

});
