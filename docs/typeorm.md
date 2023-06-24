## how to use migration by TypeORM oracle ver

*1. set oracle instant client*
install oracle instantclient and set env path etc.  
> check detail on oracle-instantclient.md


*2. install typeorm*
```
npm install typeorm @nestjs/typeorm
```

*3. install oracledb module* 
```
npm install oracledb @types/oracledb
```

*4. set instantclient-basic files to node_modules/oracledb...*
At node_modules/oracledb/build/release paste everything from extracted instantclient-basic folder  

*5. create data-source.ts*

*6. import dataSourceOptions in app.module.ts*  
```
@Module({
  imports: [
    ...,
    TypeOrmModule.forRoot(dataSourceOptions),
```

4. generate migration file  
```
npx typeorm-ts-node-commonjs migration:generate -d apps/server/src/data-source.ts apps/server/src/app/migrations/<migration-name>
```

5. run migration  
```
npx typeorm-ts-node-commonjs migration:run -d apps/server/src/data-source.ts
```