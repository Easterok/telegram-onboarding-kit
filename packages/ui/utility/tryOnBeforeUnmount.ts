import { getCurrentScope, onBeforeUnmount } from 'vue';

type Fn = () => void;

export function tryOnBeforeUnmount(fn: Fn) {
  if (getCurrentScope()) {
    onBeforeUnmount(fn);
  }
}
