import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    async create(data: CreateUserDto) {
        try {
            return await this.prisma.user.create({
                data: {
                    ...data,
                    interests: {
                        connect: data.interests,
                    },
                },
                include: {
                    interests: true,
                },
            });
        } catch (error) {
            let msg = 'Entrada invalida';
            if (error.code === 'P2002')
                msg = `${error.meta.target.replace(
                    '_unique',
                    '',
                )} já cadastrado`;
            if (error.code === 'P2025') msg = `id de interesse inválido`;
            throw new HttpException(msg, 422);
        }
    }

    findAll() {
        return this.prisma.user.findMany({
            include: {
                interests: true,
            },
        });
    }

    async findOne(id: number) {
        return await this.prisma.user
            .findUnique({
                where: { id: id },
                include: {
                    interests: true,
                },
            })
            .then(user => {
                if (user) return user;
                else throw new NotFoundException();
            });
    }

    async update(id: number, data: UpdateUserDto) {
        return await this.prisma.user
            .update({
                where: { id: id },
                data: {
                    ...data,
                    interests: {
                        set: data.interests,
                    },
                },
                include: {
                    interests: true,
                },
            })
            .catch(error => {
                if (error.code === 'P2025')
                    throw new HttpException(
                        { msg: `id de interesse inválido`, error },
                        422,
                    );
            });
    }

    async remove(id: number) {
        return await this.prisma.user.delete({ where: { id: id } });
    }
}
