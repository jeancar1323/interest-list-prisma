"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            return await this.prisma.user.create({
                data: Object.assign(Object.assign({}, data), { interests: {
                        connect: data.interests,
                    } }),
                include: {
                    interests: true,
                },
            });
        }
        catch (error) {
            let msg = 'Entrada invalida';
            if (error.code === 'P2002')
                msg = `${error.meta.target.replace('_unique', '')} já cadastrado`;
            if (error.code === 'P2025')
                msg = `id de interesse inválido`;
            throw new common_1.HttpException(msg, 422);
        }
    }
    findAll() {
        return this.prisma.user.findMany({
            include: {
                interests: true,
            },
        });
    }
    async findOne(id) {
        return await this.prisma.user
            .findUnique({
            where: { id: id },
            include: {
                interests: true,
            },
        })
            .then(user => {
            if (user)
                return user;
            else
                throw new common_1.NotFoundException();
        });
    }
    async update(id, data) {
        return await this.prisma.user
            .update({
            where: { id: id },
            data: Object.assign(Object.assign({}, data), { interests: {
                    set: data.interests,
                } }),
            include: {
                interests: true,
            },
        })
            .catch(error => {
            if (error.code === 'P2025')
                throw new common_1.HttpException({ msg: `id de interesse inválido`, error }, 422);
        });
    }
    async remove(id) {
        return await this.prisma.user.delete({ where: { id: id } });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map