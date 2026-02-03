import { IsInt, IsString } from 'class-validator';


export class CreateServiceDto {

  @IsString()
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsInt()
  price: number;
}
