import Item from '../entity/Item';
import OrderCode from '../entity/OrderCode';

export default interface ItemRepository {
  findById(idItem: OrderCode): Promise<Item | undefined>;
}
