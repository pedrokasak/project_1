import { PrismaClient } from '@prisma/client';
import Connection from './Connection';

export default class PrismaPromiseAdapter implements Connection {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(
    id_item: number,
    category: string,
    description: string,
    price: number,
    width: number,
    heigth: number,
    length: number,
    weigth: number
  ): Promise<void> {
    try {
      await this.prisma.item.create({
        data: {
          id_item: id_item,
          category: category,
          description: description,
          price: price,
          width: width,
          heigth: heigth,
          length: length,
          weigth: weigth
        }
      });
    } catch (error: any) {
      throw new Error(error);
    }
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
  async delete(id_item: number): Promise<void> {
    try {
      await this.prisma.item.delete({
        where: {
          id_item: id_item,
        },
      });
    } catch (error) {
      this.disconnect();
    }
  }

  async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
