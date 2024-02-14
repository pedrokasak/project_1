import { PrismaClient } from '@prisma/client';
import Item from '../../../domain/entity/Item';
import ItemRepository from '../../../domain/repository/ItemRepository';
import Connection from '../../../infra/database/Connection';
import OrderCode from '../../../domain/entity/OrderCode';

export default class ItemRepositoryDatabase implements ItemRepository {

  prisma = PrismaClient

  constructor (readonly connection: Connection) {}

  findById(idItem: OrderCode): Promise<Item | undefined> {
    throw new Error('not implemented');
 }
}