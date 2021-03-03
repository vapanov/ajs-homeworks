export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map();
  }

  translate(code) {
    let errString = this.errorMap.get(code);
    if (!errString) {
      errString = `Unknown error`;
    }
    return errString;
  }
}
