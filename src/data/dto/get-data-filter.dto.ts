import { IsOptional } from 'class-validator'

export class GetDataFilterDto {

  @IsOptional()
  field: string

  @IsOptional()
  condition: FilterParameter

  @IsOptional()
  value: string

  @IsOptional()
  pageNumber: number

  @IsOptional()
  pageSize: number

  @IsOptional()
  sort: string

  @IsOptional()
  sortDirection: string

}

export enum FilterParameter {
  EQUAL = 'equal',
  CONTAIN = 'contain',
  GREATER = 'greater',
  LESS = 'less'
}
