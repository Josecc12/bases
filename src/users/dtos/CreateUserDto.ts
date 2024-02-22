import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export default class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  address: string;
}
