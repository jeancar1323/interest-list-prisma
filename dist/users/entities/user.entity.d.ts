import { Prisma } from '@prisma/client';
export declare class User implements Prisma.UserUncheckedCreateInput {
    id?: number;
    email: string;
    name?: string;
    password?: string;
    created_at?: string | Date;
    update_at?: string | Date;
}
