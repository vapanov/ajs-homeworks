export default function getHealthStatus(obj) {
  // принимаем {name: 'Маг', health: 90}
  if (!obj.health) {
    return 'corrupted data request';
  }
  switch (true) {
    case obj.health > 50:
      return 'healthy';
    case obj.health < 15:
      return 'critical';
    default:
      return 'wounded';
  }
}
