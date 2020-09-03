import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataRepository } from './data.repository'
import { Data } from './data.entity'
import { GetDataFilterDto } from './dto/get-data-filter.dto'

@Injectable()
export class DataService {

  constructor(
    @InjectRepository(DataRepository)
    private dataRepository: DataRepository
  ) {}

  async getData(filterDto: GetDataFilterDto): Promise<{ count: number, data: Data[] }> {
    return this.dataRepository.getData(filterDto)
  }

  async createData(): Promise<void> {
    await this.dataRepository.createData()
  }

}
