export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateUsername(name) {
    if (!name) {
      throw new Error('bad data input');
    }
    // Допустимы только латинские буквы , символы тире -, подчёркивания _ и цифры (0-9);
    const firstCheck = /^[\w-]*$/.test(name);
    // Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами, символами подчёркивания или тире.
    const secondCheck = !/(\d{4,})+/g.test(name);
    // на краях не должно быть цифр, подчеркивания и тире
    const thirdCheck = /^[^\d-_].*[^\d-_]$/.test(name);
    const result = firstCheck && secondCheck && thirdCheck;

    return result;
  }
}
