import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: CreateUserDto): Promise<import(".prisma/client").User & {
        interests: import(".prisma/client").Interest[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        interests: import(".prisma/client").Interest[];
    })[]>;
    findOne(id: string): Promise<import(".prisma/client").User & {
        interests: import(".prisma/client").Interest[];
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<void | (import(".prisma/client").User & {
        interests: import(".prisma/client").Interest[];
    })>;
    remove(id: string): Promise<import(".prisma/client").User>;
}
