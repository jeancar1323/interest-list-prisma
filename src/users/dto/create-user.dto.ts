import { Type } from 'class-transformer';
import {
    Allow,
    IsArray,
    IsDefined,
    IsEnum,
    IsOptional,
    IsString,
    ValidateNested,
} from 'class-validator';
import { IdsDto } from './ids.dto';

export class CreateUserDto {
    @IsDefined()
    @IsString()
    email: string;
    @IsString()
    name: string;
    @IsString()
    password?: string;
    @ValidateNested({ each: true })
    @Type(() => IdsDto)
    interests: IdsDto[];
}
