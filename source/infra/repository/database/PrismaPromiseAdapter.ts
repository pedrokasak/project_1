import { PrismaClient } from '@prisma/client';
import Connection from './Connection';

export default class PrismaPromiseAdapter implements Connection {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  create(
    category: string,
    description: string,
    price: number,
    width: number,
    heigth: number,
    length: number,
    weigth: number
  ): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<any> {
    try {
      const data = await this.prisma.item.findMany();
      return data;
    } catch (error: any) {
      this.disconnect();
    }
  }

  async findOne(id: number) {
    try {
      await this.prisma.item.findUnique({
        where: {
          id_item: id,
        },
      });
    } catch {
      this.disconnect();
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
