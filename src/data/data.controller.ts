import { Controller, Get, Post, Query } from '@nestjs/common'
import { DataService } from './data.service'
import { GetDataFilterDto } from './dto/get-data-filter.dto'
import { GetDataInterface } from './interfaces/get-data.interface'

@Controller('data')
export class DataController {

  constructor(private dataService: DataService) {}

  @Get()
  async getData(@Query() filterDto: GetDataFilterDto): Promise<GetDataInterface> {
    return this.dataService.getData(filterDto)
  }


  @Post()
  createData(): void {
    this.dataService.createData()
  }

}
