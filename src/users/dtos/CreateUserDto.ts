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
  firstName: string;

  @IsEmail()
  email: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  password: string;
}
