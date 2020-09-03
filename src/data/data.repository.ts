import { EntityRepository, Repository } from 'typeorm'
import { Data } from './data.entity'
import { FilterParameter, GetDataFilterDto } from './dto/get-data-filter.dto'
import { testData } from '../assets/testData'

@EntityRepository(Data)
export class DataRepository extends Repository<Data>{

  async getData(filterDto: GetDataFilterDto): Promise<{ count: number, data: Data[] }> {
    const { field, condition, value, pageNumber = 1, pageSize = 10, sort, sortDirection } = filterDto
    const query = this.createQueryBuilder('data')

    if (field && condition && value) {
      switch (condition) {
        case FilterParameter.CONTAIN:
          query.andWhere(`data.${field}::text LIKE '%' || :value || '%'`, {value})
          break
        case FilterParameter.EQUAL:
          query.andWhere(`data.${field} = :value`, {value})
          break
        case FilterParameter.GREATER:
          query.andWhere(`data.${field} > :value`, {value})
          break
        case FilterParameter.LESS:
          query.andWhere(`data.${field} < :value`, {value})
      }
    }

    if (sort) {
      query.orderBy(`data.${ sort }`, `${ sortDirection }` as 'ASC' | 'DESC')
    }

    const count = await query.getCount()
    const data = await query.skip(((pageNumber - 1) * pageSize)).take(pageSize).getMany()

    return { count, data }
  }

  async createData(): Promise<void> {
    const query = this.createQueryBuilder('data')
    await query.insert().into(Data).values(testData).execute()
  }

}
