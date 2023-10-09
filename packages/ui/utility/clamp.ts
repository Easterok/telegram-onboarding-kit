export function clamp<T extends number>(value: T, min: T, max: T): T {
  return Math.min(max, Math.max(min, value)) as T;
}
