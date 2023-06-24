import { env } from '@libs/shared/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { dataSourceOptions } from '../data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionsModule } from './regions/regions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [() => ({ ...env })],
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        DATABASE_TYPE: Joi.string().required(),
        ORACLE_USER: Joi.string().required(),
        ORACLE_PASSWORD: Joi.string().required(),
        ORACLE_DATA_SOURCE: Joi.string().required(),
        SQLITE_PATH: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    RegionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
