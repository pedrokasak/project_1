import FreightCalculator from './FreightCalculator';
import Item from './Item';

export default class DefaulFreightCalculator implements FreightCalculator {
  calculate(item: Item) {
    if (!item.width || !item.height || !item.lenght || !item.weight) return 0;
    const freight = item.price * item.getDensity() * 1;
    const minFreight = 10;
    return Math.max(minFreight, freight);
  }
}
