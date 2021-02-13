export default function sortUnitsByHealth(units) {
  if (!units) {
    return 'corrupt data input'; // нужно ли писать здесь проверки на всю мисдату?
  }
  units.sort((a, b) => (a.health < b.health ? 1 : -1));
  return units;
}
