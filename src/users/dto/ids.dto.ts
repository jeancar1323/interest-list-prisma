import { IsNumber, IsDefined } from 'class-validator';
export class IdsDto {
    @IsNumber()
    @IsDefined()
    id: number;
}
