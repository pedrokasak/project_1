import Item from '../../../domain/entity/Item';
import OrderCode from '../../../domain/entity/OrderCode';
import ItemRepository from '../../../domain/repository/ItemRepository'

export default class ItemRepositoryMemory implements ItemRepository {

  items: Item[]
  readonly code: OrderCode | undefined;
  constructor() {
    this.items = [
      new Item(this.code, "Song", "CD", 15),
      new Item(this.code, "Motherboard", "Hardware", 150),
      new Item(this.code, "Memory", "Hardware", 65),
      new Item(this.code, "Memory RAM 16GB DDR4", "Hardware", 150, 0.5, 0.2, 0.5, 0.03),
      new Item(this.code, "Graphic Card RTX 4060 8GB", "Hardware", 3500, 0.6, 0.25, 0.32, 2),
      new Item(this.code, "Fonte GAMEMAX 650W ", "Hardware", 400, 0.40, 0.53, 0.32, 4)
    ];
  }

  findById(idItem: OrderCode): Promise<Item| undefined> {
    return Promise.resolve(this.items.find(item => item.idItem === idItem));
  }
}