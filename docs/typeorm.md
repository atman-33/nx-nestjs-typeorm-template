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

*4. create data-source.ts*

*5. import dataSourceOptions in app.module.ts*  
```
@Module({
  imports: [
    ...,
    TypeOrmModule.forRoot(dataSourceOptions),
```

*6. create module, controller, and service file*
```
nx generate @nx/nest:module app/<module-name> --project=server
nx generate @nx/nest:controller app/<controller-name> --project=server
nx generate @nx/nest:service app/<service-name> --project=server
```

*7. create entity file*

*8. add TypeOrmModule.forFeature in module file*
> example  
```ts
@Module({
  imports: [TypeOrmModule.forFeature([Region])],  
  controllers: [ItemController],
  providers: [ItemService],
})
export class RegionsModule {}
```

*9. install tsconfig-path*  
```
npm install --save-dev tsconfig-paths
```

*10. create tsconfig.typeorm.json*
```json
{
    "extends": "./tsconfig.base.json",
    "compilerOptions": {
        "module": "commonjs",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    }
}
```

*11. generate migration file*  
```
npx ts-node -r tsconfig-paths/register -P tsconfig.typeorm.json ./node_modules/typeorm/cli.js migration:generate -d apps/server/src/data-source.ts apps/server/src/app/migrations/<migration-name>
```

*12. run migration*  
```
npx ts-node -r tsconfig-paths/register -P tsconfig.typeorm.json ./node_modules/typeorm/cli.js migration:run -d apps/server/src/data-source.ts
```