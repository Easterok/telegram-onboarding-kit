import { computed, ComputedRef, Ref, ref } from 'vue';

export type MaybeRef<T> = Ref<T> | T;
export type MaybeComputedRef<T> = ComputedRef<T> | (() => T) | MaybeRef<T>;

export function resolveRef<T>(r: MaybeComputedRef<T>): ComputedRef<T>;
export function resolveRef<T>(r: MaybeRef<T>): Ref<T>;
export function resolveRef<T>(r: MaybeComputedRef<T>) {
  return typeof r === 'function' ? computed<T>(r as any) : ref(r);
}
