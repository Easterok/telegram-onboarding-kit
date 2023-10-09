let autoId = 0;

export function getElementId() {
  return `tok-interactive_${autoId++}_${Date.now()}`;
}
