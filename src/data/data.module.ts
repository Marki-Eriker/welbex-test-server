import { Module } from '@nestjs/common'
import { DataService } from './data.service'
import { DataController } from './data.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataRepository } from './data.repository'

@Module({
  providers: [DataService],
  controllers: [DataController],
  imports: [
    TypeOrmModule.forFeature([DataRepository])
  ]
})
export class DataModule {}
