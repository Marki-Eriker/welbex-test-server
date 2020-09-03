import { Module } from '@nestjs/common'
import { DataModule } from './data/data.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './data/config/typeorm.config'


@Module({
  imports: [
    DataModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}
