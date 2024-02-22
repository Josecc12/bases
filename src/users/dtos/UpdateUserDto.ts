import { PartialType } from '@nestjs/mapped-types';
import CreateUserDto from './CreateUserDto';

class UpdateUserDto extends PartialType(CreateUserDto) {}

export default UpdateUserDto;
