import { PrismaClient } from '@prisma/client';
import Item from '../../../domain/entity/Item';
import ItemRepository from '../../../domain/repository/ItemRepository';
import Connection from '../../../infra/database/Connection';

export default class ItemRepositoryDatabase implements ItemRepository {

  prisma = PrismaClient

  constructor (readonly connection: Connection) {}

  findById(idItem: number): Promise<Item | undefined> {
    throw new Error('not implemented');
 }
}