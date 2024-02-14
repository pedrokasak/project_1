export default class OrderCode {

  readonly value: string;
  
  constructor() {
    // this.value = this.generateCode(date,sequence);
    this.value = crypto.randomUUID();
  }
  
  generateCode() {
    const code  = this.value;
    return code;
  }

}