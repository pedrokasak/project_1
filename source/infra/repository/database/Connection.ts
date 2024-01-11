export default interface Connection {
  findAll(): Promise<void>;
  findOne(id: number): Promise<void>;
  create(
    category: string,
    description: string,
    price: number,
    width: number,
    heigth: number,
    length: number,
    weigth: number
  ): Promise<void>;
  
}
