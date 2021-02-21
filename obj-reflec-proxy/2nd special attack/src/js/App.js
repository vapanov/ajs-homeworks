export default function characterSpecAttack(obj) {
  if (!obj) {
    throw new Error('bad data input');
  }
  const specialAttackArray = []; // массив возвращаемых значений

  obj.special.forEach((item) => {
    const { id, name, icon, description = 'Описание недоступно' } = item;
    const template = {};
    template.id = id;
    template.name = name;
    template.icon = icon;
    template.description = description;
    specialAttackArray.push(template);
  });

  return specialAttackArray;
}
