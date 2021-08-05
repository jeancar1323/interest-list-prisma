import { IdsDto } from './ids.dto';
export declare class CreateUserDto {
    email: string;
    name: string;
    password?: string;
    interests: IdsDto[];
}
