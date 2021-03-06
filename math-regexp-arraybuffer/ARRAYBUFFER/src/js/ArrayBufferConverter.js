export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  load(input) {
    this.buffer = new Uint16Array(input);
  }

  toString() {
    try {
      const result = [...this.buffer].map((key) => String.fromCharCode(key)).join('');
      return result;
    } catch (err) {
      throw new Error('bad data inside');
    }
  }
}
