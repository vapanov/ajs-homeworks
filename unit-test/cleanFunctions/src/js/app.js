export default function healthStatus(obj) {
  // {name: 'Маг', health: 90}
  if (!obj.health) {
    throw new Error('corrupted data request');
  }
  switch (obj.health) {
    case obj.health > 50:
      return 'healthy';
    case obj.health < 15:
      return 'critical';
    default:
      return 'wounded';
  }
}
