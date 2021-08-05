import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUserDto): Promise<import(".prisma/client").User & {
        interests: import(".prisma/client").Interest[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        interests: import(".prisma/client").Interest[];
    })[]>;
    findOne(id: number): Promise<import(".prisma/client").User & {
        interests: import(".prisma/client").Interest[];
    }>;
    update(id: number, data: UpdateUserDto): Promise<void | (import(".prisma/client").User & {
        interests: import(".prisma/client").Interest[];
    })>;
    remove(id: number): Promise<import(".prisma/client").User>;
}
