import { env } from '@libs/shared/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Item } from './app/entities/item.entity';
import { Region } from './app/entities/region.entity';
import { User } from './app/entities/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  /* postgres ver */
  // type: 'postgres',
  // host: 'localhost',
  // port: 5432,
  // username: 'postgres',
  // password: 'postgres',
  // database: 'postgres',

  /* oracle ver */
  type: 'oracle',
  host: 'localhost',
  port: 1521,
  username: env.ORACLE_USER,
  password: env.ORACLE_PASSWORD,
  connectString: env.ORACLE_DATA_SOURCE,

  /**
   * File for generating migration files and setting metadata for entities.
   * Note: Referencing *.entity.ts/js files will cause an error, so specify the class.
   */
  entities: [User, Item, Region],

  /**
    * Entity file for generating migration files.
    * Note: Referencing ts files will cause an error as they are not modules, so specify the transpiled js.
   */
  migrations: ['apps/server/src/app/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;