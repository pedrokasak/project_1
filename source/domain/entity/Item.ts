export default class Item {
  constructor(
    readonly idItem: number,
    readonly category: string,
    readonly description: string,
    readonly price: number = 0,
    readonly width: number = 0,
    readonly height: number = 0,
    readonly lenght: number = 0,
    readonly weight: number = 0
  ) {}

  getVolume() {
    return this.lenght * this.weight * this.width;
  }

  getDensity() {
    return this.getVolume() / this.weight;
  }

}
