import Item from '../../../domain/entity/Item';
import ItemRepository from '../../../domain/repository/ItemRepository'

export default class ItemRepositoryMemory implements ItemRepository {

  items: Item[]
  constructor() {
    this.items = [
      new Item(1, "Song", "CD", 15),
      new Item(2, "Motherboard", "Hardware", 150),
      new Item(3, "Memory", "Hardware", 65),
      new Item(4, "Memory RAM 16GB DDR4", "Hardware", 150, 0.5, 0.2, 0.5, 0.03),
      new Item(5, "Graphic Card RTX 4060 8GB", "Hardware", 3500, 0.6, 0.25, 0.32, 2),
      new Item(6, "Fonte GAMEMAX 650W ", "Hardware", 400, 0.40, 0.53, 0.32, 4)
    ];
  }

  findById(idItem: number): Promise<Item| undefined> {
    return Promise.resolve(this.items.find(item => item.idItem === idItem));
  }
}