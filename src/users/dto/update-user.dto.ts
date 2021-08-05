import { PartialType } from '@nestjs/mapped-types';
import { Expose } from 'class-transformer';
import { IsEmpty, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsEmpty()
    @IsNotEmpty()
    name: string;
}
