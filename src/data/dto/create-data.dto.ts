import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsNumberString, IsString } from 'class-validator'


export class CreateDataDto {

  @IsNotEmpty()
  @IsDateString()
  date: Date

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumberString()
  count: number

  @IsNotEmpty()
  @IsNumberString()
  distance: number

}
